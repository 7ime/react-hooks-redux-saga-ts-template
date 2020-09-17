import * as React from 'react'
import {NavLink, withRouter} from 'react-router-dom'

import './index.scss'
import BemShaper from '../../../bem/bem-shaper'
import {EBemClassNames} from '../../../bem/bem-class-names'
import Routes from '../../../routing/routes'
import {IRouting} from '../../../routing/model'

const bem = new BemShaper(EBemClassNames.header)

interface IProps extends IRouting.Props {
    mixes?: string[]
}

const Header = (props: IProps) => {
    const {
        mixes = []
    } = props

    const classNames = [
        bem.block,
        bem.mixes(mixes)
    ].join(' ').trim()

    return (
        <div className={classNames}>
            <div className={EBemClassNames.container}>
                <div className={bem.elem('menu')}>
                    <NavLink to={Routes.home.root()}
                             exact
                             activeClassName={bem.is('active')}
                             className={bem.elem('link')}
                    >Home Page</NavLink>
                    <NavLink to={Routes.form.root()}
                             activeClassName={bem.is('active')}
                             className={bem.elem('link')}
                    >Form Page</NavLink>
                    <NavLink to={Routes.hooks.root()}
                             activeClassName={bem.is('active')}
                             className={bem.elem('link')}
                    >Hooks Page</NavLink>
                    <NavLink to={Routes.storybook.root()}
                             activeClassName={bem.is('active')}
                             className={bem.elem('link')}
                    >Storybook</NavLink>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header)