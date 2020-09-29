import * as React from 'react'
import css from './index.module.scss'
import cssColorsVariables from '@styles/variables/colors.module.scss'
import cssSharedVariables from '@styles/variables/shared.module.scss'
import cssCommon from '../../styles/common.module.scss'
import {kebabCase} from 'lodash'
import classnames from 'classnames'

interface IProps {

}

const StorybookVariables = (props: IProps) => {
    return (
        <div className={css.content}>
            <div className={cssCommon.subtitle}>Colors:</div>

            <div className={css.list}>
                {
                    Object.entries(cssColorsVariables).map(([key, value]) => {
                        return (
                            <div className={css.item} key={key}>
                                <div className={css.variables}>
                                    <div className={css.col}>
                                        <div className={css.color} style={{
                                            background: value
                                        }} />
                                        <div className={css.title}>{kebabCase(key)}:</div>
                                    </div>
                                    <div className={css.col}>
                                        <div className={css.text}>{value}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className={cssCommon.subtitle}>Others:</div>

            <div className={classnames(css.list, css.listOthers)}>
                {
                    Object.entries(cssSharedVariables).map(([key, value]) => {
                        return (
                            <div className={css.item} key={key}>
                                <div className={css.variables}>
                                    <div className={css.col}>
                                        <div className={css.title}>{kebabCase(key)}:</div>
                                    </div>
                                    <div className={css.col}>
                                        <div className={css.text}>{value}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StorybookVariables