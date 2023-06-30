import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { useRouter } from 'next/router'

export default function Document() {
  const { asPath, locale, locales} = useRouter;
  const l = locale === 'en-US' ? "en" : "es";
  return (
    <Html lang={l}>
      <Head />
      <body>
        <Script id="theme-switcher" strategy='beforeInteractive'>
        {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }`}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
