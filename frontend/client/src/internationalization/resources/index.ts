import {localesWelcomeEN} from '@internationalization/locales/en/welcome'
import {localesWelcomeRU} from '@internationalization/locales/ru/welcome'
import {ELocalizationLanguages} from '@constants/i18next'
import {RequiredFields} from '@toolbox/custom-types'
import {ENameSpaces} from '@internationalization/namespaces'
import {localesStorybookEN} from '@internationalization/locales/en/storybook'
import {localesStorybookRU} from '@internationalization/locales/ru/storybook'

export type IInternationalizationResources = RequiredFields<ELocalizationLanguages, RequiredFields<ENameSpaces, Object>>

export const internationalizationResources: IInternationalizationResources = {
    [ELocalizationLanguages.EN]: {
        [ENameSpaces.welcome]: localesWelcomeEN,
        [ENameSpaces.storybook]: localesStorybookEN
    },
    [ELocalizationLanguages.RU]: {
        [ENameSpaces.welcome]: localesWelcomeRU,
        [ENameSpaces.storybook]: localesStorybookRU
    }
}
