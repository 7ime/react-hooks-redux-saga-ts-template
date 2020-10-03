import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import CSSModules from '../../../toolbox/css-modules'

type IMod = 'error' | 'success'

interface IProps {
    mods?: IMod[]
    parentClass?: string
    messageList: string[]
}

const MessageValidationContainer = (props: IProps) => {
    const {
        mods = [],
        parentClass,
        messageList
    } = props

    const modsCssModules = CSSModules.extractClassNamesForArray(mods, css)

    return (
        <div className={classnames(css.list, ...modsCssModules, parentClass)}>
            {
                messageList.map((msg) => (<div key={msg} className={css.item}>{msg}</div>))
            }
        </div>
    )
}

export default React.memo(MessageValidationContainer)
