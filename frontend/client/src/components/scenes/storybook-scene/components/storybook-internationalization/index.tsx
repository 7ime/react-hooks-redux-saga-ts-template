import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import cssCommon from '../../styles/common.module.scss'

interface IProps {

}

const StorybookInternationalization = (props: IProps) => {
    return (
        <div className={cssCommon.content}>
            <div className={cssCommon.title}>Internationalization</div>
        </div>
    )
}

export default StorybookInternationalization
