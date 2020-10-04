import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {DETECTION_OPTIONS, ELocalizationLanguages} from '@constants/i18next'

import translationEN from '@locales/en/translation.json'
import translationRU from '@locales/ru/translation.json'

const resources = {
    [ELocalizationLanguages.EN]: {
        translation: translationEN,
    },
    [ELocalizationLanguages.RU]: {
        translation: translationRU,
    },
}

const initI18next = () => {
    i18next
        .use(initReactI18next)
        .use(LanguageDetector)
        .init({
            detection: DETECTION_OPTIONS,
            fallbackLng: ELocalizationLanguages.EN,
            interpolation: {
                escapeValue: false
            },
            resources
        })
}

export default initI18next
