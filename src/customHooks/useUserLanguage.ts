import { UserLanguageContext } from '@/contexts/userLanguageContext';
import { useContext, useEffect, useState } from 'react';

export const useUserLanguage = () => {
  const context = useContext(UserLanguageContext);

  if (!context) throw new Error("useUserLanguaje must be wrapped by useUserLanguageContextProvider");

  return context
  /* const [language, setLanguage] = useState('en');

  useEffect(() => {
    const browserLanguage = navigator.language || navigator.languages[0];

    browserLanguage.startsWith('es') ? setLanguage('es') : setLanguage('en');
  }, []);

  return language; */
}