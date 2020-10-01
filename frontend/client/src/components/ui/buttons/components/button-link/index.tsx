import * as React from 'react'
import classnames from 'classnames'
import IButton from '../../model'
import Loader from '../../../loaders/components/loader'
import {ELoaderPosition} from '../../../../../constants/shared'
import CSSModules from '../../../../../toolbox/css-modules'
import css from '../../styles/button.module.scss'

const ButtonLink = (props: IButton.ButtonLinkProps) => {
    const {
        href = '#',
        loader,
        loaderPosition = ELoaderPosition.center,
        mods = [],
        disabled,
        children,
        ...restProps
    } = props

    const modsCssModules = CSSModules.extractClassNamesForArray(mods, css)

    const classNames = classnames(
        css.button,
        ...modsCssModules,
        {[css.is_disabled]: disabled},
        {[css.loader]: loader},
        {[css[`loader_${loaderPosition}`]]: loader},
    )

    return (
        <a href={href} className={classNames} {...restProps}>
            {children}
            {loader && <div className={css.loaderComponent}><Loader/></div>}
        </a>
    )
}

export default ButtonLink
