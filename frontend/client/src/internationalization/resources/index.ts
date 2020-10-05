import translationEN from '@internationalization/locales/en/translation.json'
import translationRU from '@internationalization/locales/ru/translation.json'
import {ELocalizationLanguages} from '@constants/i18next'

export const internationalizationResources = {
    [ELocalizationLanguages.EN]: {
        translation: translationEN,
    },
    [ELocalizationLanguages.RU]: {
        translation: translationRU,
    },
}
