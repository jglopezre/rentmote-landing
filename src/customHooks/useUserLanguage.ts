import { useEffect, useState } from 'react';

export const useUserLanguage = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const browserLanguage = navigator.language || navigator.languages[0];

    browserLanguage.startsWith('es') ? setLanguage('es') : setLanguage('en');
  }, []);

  return language;
}