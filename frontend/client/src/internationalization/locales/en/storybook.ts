import {RequiredFields} from '@toolbox/custom-types'
import {ELocalesStorybookKeys} from '@internationalization/locales-keys/storybook'

export const localesStorybookEN: RequiredFields<ELocalesStorybookKeys, string | Object> = {
    [ELocalesStorybookKeys.title]: 'Internationalization',
    [ELocalesStorybookKeys.content]: {
        subTitle: 'Test sub title',
        description: 'Test description',
    },
}
