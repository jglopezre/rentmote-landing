import { ReactSimpleComponentProps } from '@/custom-types';
import React, { createContext, useEffect, useState } from 'react';

export const UserLanguageContext = createContext<{ userLanguage: string } | null>(null);

export const UserLanguageContextProvider: React.FC<ReactSimpleComponentProps> = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState('en');
  
  useEffect(() => {
    const browserLanguage = navigator.language || navigator.languages[0];

    browserLanguage.startsWith('es') ? setUserLanguage('es') : setUserLanguage('en');
  }, []);
  
  return (
    <UserLanguageContext.Provider value={{ userLanguage }}>
      {children}
    </UserLanguageContext.Provider>
  )
}