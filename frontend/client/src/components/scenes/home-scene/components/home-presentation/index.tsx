import * as React from 'react'
import css from './index.module.scss'
import StorybookEcosystem from '@components/scenes/storybook-scene/components/storybook-ecosystem'
import {useTranslation} from 'react-i18next'
import {EI18nNameSpaces} from '@constants/i18n'

const HomePresentation = () => {
    const {t} = useTranslation()

    return (
        <div className={css.homePresentation}>
            <div className={css.title}>{t(`${EI18nNameSpaces.welcome}:title`)}</div>
            <StorybookEcosystem/>
        </div>
    )
}

export default HomePresentation
