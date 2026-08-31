import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../i18n/translations";

const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  if (typeof window === "undefined") return "id";

  const saved = window.localStorage.getItem("language");
  if (saved === "id" || saved === "en") return saved;

  return "id";
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"));
  };

  // Translate a static UI string by key, e.g. t("nav.beranda")
  const t = (key) => {
    const keys = key.split(".");
    let result = translations[language];
    for (const k of keys) {
      result = result?.[k];
    }
    return result ?? key;
  };

  // Pick the right language field from bilingual data objects,
  // e.g. pick({ id: "Halo", en: "Hello" })
  const pick = (bilingualField) => {
    if (bilingualField == null) return "";
    if (typeof bilingualField === "string") return bilingualField;
    return bilingualField[language] ?? bilingualField.id ?? "";
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, pick }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
