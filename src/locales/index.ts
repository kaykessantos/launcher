import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Arabic from "./translations/ar";
import Bosnian from "./translations/bs";
import English from "./translations/en";
import Spanish from "./translations/es";
import Farsi from "./translations/fa";
import Filipino from "./translations/fil";
import French from "./translations/fr";
import Hindi from "./translations/hi";
import Hungarian from "./translations/hu";
import Indonesian from "./translations/id";
import Italian from "./translations/it";
import Polish from "./translations/pl";
import Portuguese from "./translations/pt";
import Romanian from "./translations/ro";
import Russian from "./translations/ru";
import Turkish from "./translations/tr";

export type LanguageType =
  | "en"
  | "es"
  | "fa"
  | "fil"
  | "fr"
  | "hi"
  | "it"
  | "ro"
  | "hu"
  | "pt"
  | "ar"
  | "id"
  | "pl"
  | "bs"
  | "ru"
  | "tr";

export const getLanguages = (): {
  [x: string]: {
    label: string;
    type: LanguageType;
    translations: { [x: string]: string };
  };
} => {
  return {
    en: {
      label: "English",
      type: "en",
      translations: English,
    },
    ru: {
      label: "Русский",
      type: "ru",
      translations: Russian,
    },
    es: {
      label: "Español",
      type: "es",
      translations: Spanish,
    },
    ro: {
      label: "Română",
      type: "ro",
      translations: Romanian,
    },
    id: {
      label: "Bahasa Indonesia",
      type: "id",
      translations: Indonesian,
    },
    fil: {
      label: "Filipino",
      type: "fil",
      translations: Filipino,
    },
    fr: {
      label: "Français",
      type: "fr",
      translations: French,
    },
    it: {
      label: "Italiano",
      type: "it",
      translations: Italian,
    },
    hu: {
      label: "Magyar",
      type: "hu",
      translations: Hungarian,
    },
    pt: {
      label: "Português",
      type: "pt",
      translations: Portuguese,
    },
    fa: {
      label: "فارسی",
      type: "fa",
      translations: Farsi,
    },
    ar: {
      label: "العربية",
      type: "ar",
      translations: Arabic,
    },
    hi: {
      label: "हिंदी",
      type: "hi",
      translations: Hindi,
    },
    pl: {
      label: "Polski",
      type: "pl",
      translations: Polish,
    },
    bs: {
      label: "Bosanski",
      type: "bs",
      translations: Bosnian,
    },
    tr: {
      label: "Türkçe",
      type: "tr",
      translations: Turkish,
    },
  };
};

i18n.use(initReactI18next).init({
  // we init with resources
  resources: getLanguages(),
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
