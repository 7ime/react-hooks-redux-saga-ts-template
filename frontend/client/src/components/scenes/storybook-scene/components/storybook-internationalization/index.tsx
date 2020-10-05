import * as React from 'react'
import css from './index.module.scss'
import cssCommon from '../../styles/common.module.scss'
import {useTranslation} from 'react-i18next'
import {ENameSpaces} from '@internationalization/namespaces'
import {ELocalesStorybookKeys} from '@internationalization/locales-keys/storybook'
import {ELocalizationLanguages} from '@constants/i18next'
import Button from '@components/ui/buttons/components/button'

interface IProps {

}

const StorybookInternationalization = (props: IProps) => {
    const {t, i18n} = useTranslation()

    const changeLanguage = React.useCallback((code: ELocalizationLanguages) => {
        i18n.changeLanguage(code)
    }, [])

    return (
        <div className={cssCommon.content}>
            <div className={cssCommon.title}>{t(`${ENameSpaces.storybook}:${ELocalesStorybookKeys.title}`)}</div>

            <div className={css.content}>
                <h4 className={css.subTitle}>{t(`${ENameSpaces.storybook}:${ELocalesStorybookKeys.content}.subTitle`)}</h4>
                <div className={css.description}>{t(`${ENameSpaces.storybook}:${ELocalesStorybookKeys.content}.description`)}</div>
            </div>

            <div className={css.footer}>
                <Button type={'primary'} parentClass={css.button} onClick={() => {changeLanguage(ELocalizationLanguages.RU)}}>RU</Button>
                <Button type={'secondary'} parentClass={css.button} onClick={() => {changeLanguage(ELocalizationLanguages.EN)}}>EN</Button>
            </div>
        </div>
    )
}

export default StorybookInternationalization
