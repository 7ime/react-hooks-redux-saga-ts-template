import * as React from 'react'
import css from './index.module.scss'
import StorybookEcosystem from '@components/scenes/storybook-scene/components/storybook-ecosystem'
import {useTranslation} from 'react-i18next'
import {ELocalesWelcomeKeys} from '@internationalization/locales-keys/welcome'
import {ENameSpaces} from '@internationalization/namespaces'

const HomePresentation = () => {
    const {t} = useTranslation()

    return (
        <div className={css.homePresentation}>
            <div className={css.title}>{t(`${ENameSpaces.welcome}:${ELocalesWelcomeKeys.title}`)}</div>
            <StorybookEcosystem/>
        </div>
    )
}

export default HomePresentation
