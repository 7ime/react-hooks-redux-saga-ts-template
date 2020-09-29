import * as React from 'react'
import ILoader from '../../model'
import css from '../../styles/loader.module.scss'
import classnames from 'classnames'
import CSSModules from '../../../../../toolbox/css-modules'

const Loader = (props: ILoader.Props) => {
    const {
        mods = []
    } = props

    const modsCssModules = CSSModules.extractClassNamesForArray(mods, css)

    return(
        <div className={classnames(css.loader, ...modsCssModules)}>
            <svg className={css.circular} viewBox='25 25 50 50'>
                <circle className={css.path} cx='50' cy='50' r='20' fill='none' strokeMiterlimit='10'/>
            </svg>
        </div>
    )
}

export default Loader