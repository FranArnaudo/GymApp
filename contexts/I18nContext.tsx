import { createContext, useState } from "react";

type Language = 'es' | 'en'
type I18nContextType = {
  language: Language,
  setLanguage: (React.Dispatch<React.SetStateAction<Language>> | ((lang: string) => void))
}
export const I18nContext = createContext<I18nContextType>({ language: 'en', setLanguage: (val: any) => { } })

type I18nProviderProps = {
  children: JSX.Element
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');
  return (
    <I18nContext.Provider value={{ language, setLanguage }}>
      {children}
    </I18nContext.Provider>
  )

}