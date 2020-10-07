import {RequiredFields} from '@toolbox/custom-types'
import {EI18nLanguages, EI18nNameSpaces} from '@constants/internationalization'

import localesWelcomeEN from '@internationalization/locales/en/welcome.json'
import localesWelcomeRU from '@internationalization/locales/ru/welcome.json'
import localesStorybookEN from '@internationalization/locales/en/storybook.json'
import localesStorybookRU from '@internationalization/locales/ru/storybook.json'

export type II18nResources = RequiredFields<EI18nLanguages, RequiredFields<EI18nNameSpaces, Object>>

export const i18nResources: II18nResources = {
    [EI18nLanguages.EN]: {
        [EI18nNameSpaces.welcome]: localesWelcomeEN,
        [EI18nNameSpaces.storybook]: localesStorybookEN
    },
    [EI18nLanguages.RU]: {
        [EI18nNameSpaces.welcome]: localesWelcomeRU,
        [EI18nNameSpaces.storybook]: localesStorybookRU
    }
}
