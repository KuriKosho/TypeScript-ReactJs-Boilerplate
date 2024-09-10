import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import auth_vn from "../locales/vn/auth.json"
import auth_en from "../locales/en/auth.json"
import copyright_vn from "../locales/vn/copyright.json"
import copyrigh_en from "../locales/en/copyright.json"
export const locales = {
    'en': 'English',
    'vi': 'Vietnamese',
} as const;
export const defaultNS = ['auth', 'copyright'] as const;
export const resources = {
    en : {
        // translation: {
        //     "email": "Email"
        // },
        auth: auth_en,
        copyright: copyrigh_en
    },
    vi : {
        // translation: {
        //     "email": "Gmail"
        // },
        auth: auth_vn,
        copyright: copyright_vn
    },
} as const;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: resources,
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "vi",
    ns: ['auth','copyright'],
    defaultNS: defaultNS,
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
