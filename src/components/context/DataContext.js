import { createContext, useState, useEffect, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [translations, setTranslations] = useState({});
  const [locale, setLocale] = useState('es');

  useEffect(() => {
    const loadTranslations = async () => {
      if (locale === 'es') {
        const esTranslations = await import('@/components/utils/constants_es.js');
        setTranslations(esTranslations.translations);
      } else {
        const enTranslations = await import('@/components/utils/constants_en.js');
        setTranslations(enTranslations.translations);
      }
    };

    const loadData = async () => {
      // eslint-disable-next-line @next/next/no-assign-module-variable
      const module = await import('@/components/utils/data.json');
      setData(module.default || module);
    };

    loadTranslations();
    loadData();
  }, [locale]);

  return (
    <DataContext.Provider value={{ data, translations, locale, setLocale }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);