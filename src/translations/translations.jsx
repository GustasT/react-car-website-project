import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import lt from "./locales/lt-LT.json";
import en from "./locales/en-GB.json";
const resources = {
  lt: { translation: lt },
  en: { translation: en },
};
const locallyStoredLanguage = localStorage.getItem("language");
export const i18 = i18next.use(initReactI18next).init({
  lng: locallyStoredLanguage ? locallyStoredLanguage : "en",
  keySeparator: false,
  interpolation: { escapeValue: false },
  resources,
});
