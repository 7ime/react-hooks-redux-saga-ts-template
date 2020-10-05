import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import cssCommon from '../../styles/common.module.scss'
import {useTranslation} from 'react-i18next'
import {ENameSpaces} from '@internationalization/namespaces'
import {ELocalesStorybookKeys} from '@internationalization/locales-keys/storybook'

interface IProps {

}

const StorybookInternationalization = (props: IProps) => {
    const {t} = useTranslation()

    return (
        <div className={cssCommon.content}>
            <div className={cssCommon.title}>{t(`${ENameSpaces.storybook}:${ELocalesStorybookKeys.title}`)}</div>

            <div className={css.content}>
                <h4 className={css.subTitle}>{t(`${ENameSpaces.storybook}:${ELocalesStorybookKeys.content}.subTitle`)}</h4>
                <div className={css.description}>{t(`${ENameSpaces.storybook}:${ELocalesStorybookKeys.content}.description`)}</div>
            </div>
        </div>
    )
}

export default StorybookInternationalization
