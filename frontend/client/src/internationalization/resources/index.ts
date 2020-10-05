import {localesTranslationEN} from '@internationalization/locales/en/translation'
import {localesTranslationRU} from '@internationalization/locales/ru/translation'
import {ELocalizationLanguages} from '@constants/i18next'
import {RequiredFields} from '@toolbox/custom-types'
import {ELocalesTranslationKeys} from '@internationalization/locales-keys/translation'

export type IInternationalizationResources = RequiredFields<ELocalizationLanguages, {
    translation: RequiredFields<ELocalesTranslationKeys, string>
}>

export const internationalizationResources: IInternationalizationResources = {
    [ELocalizationLanguages.EN]: {
        translation: localesTranslationEN,
    },
    [ELocalizationLanguages.RU]: {
        translation: localesTranslationRU
    }
}
