import {ENameSpaces} from '@internationalization/namespaces'
import {ELocalizationLanguages} from '@constants/i18next'
import {RequiredFields} from '@toolbox/custom-types'

import localesWelcomeEN from '@internationalization/locales/en/welcome.json'
import localesWelcomeRU from '@internationalization/locales/ru/welcome.json'
import localesStorybookEN from '@internationalization/locales/en/storybook.json'
import localesStorybookRU from '@internationalization/locales/ru/storybook.json'

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
