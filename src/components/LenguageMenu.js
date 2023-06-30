import React from 'react'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'

const languages = [
  { name: 'Español', value: "es-ES" },
  { name: 'English', value: "en-US" }
]

const LenguageMenu = () => {
  const router = useRouter();
  const { push, pathname } = useRouter();
  const [selected, setSelected] = useState()
  const handleChange = e =>{
    setSelected(e)
    push(pathname, pathname, {locale: e.value})
  }
  
  return (
    <div className="w-auto">
      <Listbox onChange={handleChange}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg text-gray-800 border-2 border-solid border-transparent dark:border-light dark:bg-dark dark:text-light bg-white py-2 pl-3 pr-10 text-left shadow-md 
          focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white 
          focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{router.locale == "en-US" ? "English" : "Español"}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md border-2 border-solid border-transparent dark:border-light dark:bg-dark bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {languages.map((language, languageIdx) => (
                <Listbox.Option
                  key={languageIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none p-2 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={language}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate dark:text-light ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {language.name}
                      </span>
                      {language.value === router.locale ? (
                        <span className="absolute inset-y-0 right-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default LenguageMenu