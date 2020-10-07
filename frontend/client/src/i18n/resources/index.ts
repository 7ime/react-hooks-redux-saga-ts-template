import {RequiredFields} from '@toolbox/custom-types'
import {EI18nLanguages, EI18nNameSpaces} from '@constants/i18n'

import localesWelcomeEN from '@i18n/locales/en/welcome.json'
import localesWelcomeRU from '@i18n/locales/ru/welcome.json'
import localesStorybookEN from '@i18n/locales/en/storybook.json'
import localesStorybookRU from '@i18n/locales/ru/storybook.json'

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
