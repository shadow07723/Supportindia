import { createContext, useState } from "react";
import languages from "./Languages.jsx";


export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: languages[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
