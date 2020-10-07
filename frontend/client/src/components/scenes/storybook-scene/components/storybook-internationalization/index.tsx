import * as React from 'react'
import css from './index.module.scss'
import cssCommon from '../../styles/common.module.scss'
import {useTranslation} from 'react-i18next'
import Button from '@components/ui/buttons/components/button'
import {EI18nLanguages, EI18nNameSpaces} from '@constants/i18n'

interface IProps {

}

const StorybookInternationalization = (props: IProps) => {
    const {t, i18n} = useTranslation()

    const changeLanguage = React.useCallback((code: EI18nLanguages) => {
        i18n.changeLanguage(code)
    }, [])

    return (
        <div className={cssCommon.content}>
            <div className={cssCommon.title}>{t(`${EI18nNameSpaces.storybook}:title`)}</div>

            <div className={css.content}>
                <h4 className={css.subTitle}>{t(`${EI18nNameSpaces.storybook}:content.subTitle`)}</h4>
                <div className={css.description}>{t(`${EI18nNameSpaces.storybook}:content.description`)}</div>
            </div>

            <div className={css.footer}>
                <Button type={'primary'} parentClass={css.button} onClick={() => {changeLanguage(EI18nLanguages.RU)}}>RU</Button>
                <Button type={'secondary'} parentClass={css.button} onClick={() => {changeLanguage(EI18nLanguages.EN)}}>EN</Button>
            </div>
        </div>
    )
}

export default StorybookInternationalization
