import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import env from "./env.local";

// Configurazione ottimizzata per i18next
const i18nConfig = {
  // Disabilita debug in produzione
  debug: env.I18N_DEBUG === "true",

  // Configurazione lingua
  fallbackLng: "en",
  supportedLngs: ["en", "ar"],

  // Namespace
  ns: ["translations"],
  defaultNS: "translations",

  // Separatori
  keySeparator: false,
  nsSeparator: ":",

  // Interpolazione
  interpolation: {
    escapeValue: false,
  },

  // Rilevamento lingua
  detection: {
    order: ["localStorage", "navigator", "htmlTag"],
    caches: ["localStorage"],
    lookupLocalStorage: "i18nextLng",
  },

  // Configurazioni per evitare warning
  react: {
    useSuspense: false,
  },

  // Configurazioni per performance
  load: "languageOnly",
  preload: ["en"],

  // Configurazioni per evitare warning deprecati
  compatibilityJSON: "v4",

  // Configurazioni specifiche per evitare warning deprecati
  languageUtils: {
    isSupportedCode: (lng) => {
      return ["en", "ar"].includes(lng);
    },
  },

  // Configurazioni per errori
  saveMissing: false,
  missingKeyHandler: (lng, ns, key, fallbackValue) => {
    // Log solo in sviluppo
    if (process.env.NODE_ENV === "development") {
      console.warn(`Missing translation key: ${key} for language: ${lng}`);
    }
  },

  // Configurazioni per fallback
  fallbackLng: {
    ar: ["en"],
    default: ["en"],
  },
};

// Inizializza i18next con la configurazione ottimizzata
i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig);

export default i18n;
