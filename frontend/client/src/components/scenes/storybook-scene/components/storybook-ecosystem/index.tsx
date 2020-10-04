import * as React from 'react'
import css from './index.module.scss'
import {linksTechnologies} from '@components/scenes/storybook-scene/components/storybook-ecosystem/data'
import cssCommon from '@components/scenes/storybook-scene/styles/common.module.scss'

interface IProps {

}

const StorybookEcosystem = (props: IProps) => {
    return (
        <div className={cssCommon.content}>
            <div className={cssCommon.subtitle}>This template uses:</div>
            <div className={css.list}>
                {
                    linksTechnologies.map((item) => {
                        return (
                            <a key={item.link} href={item.link} target={'_blank'} className={css.item}>
                                {item.title}
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StorybookEcosystem
