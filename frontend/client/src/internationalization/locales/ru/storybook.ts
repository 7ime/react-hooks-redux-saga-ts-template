import {RequiredFields} from '@toolbox/custom-types'
import {ELocalesStorybookKeys} from '@internationalization/locales-keys/storybook'

export const localesStorybookRU: RequiredFields<ELocalesStorybookKeys, string | Object> = {
    [ELocalesStorybookKeys.title]: 'Интернационализация',
    [ELocalesStorybookKeys.content]: {
        subTitle: 'Тестовый под заголовок',
        description: 'Тестовое описание',
    },
}
