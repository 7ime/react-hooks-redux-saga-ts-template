import * as React from 'react'
import './index.scss'
import BemShaper from '../../../../../../bem/bem-shaper'
import {EBemClassNames} from '../../../../../../bem/bem-class-names'
import {NavLink} from 'react-router-dom'
import Routes from '../../../../../../routing/routes'

const bem = new BemShaper(EBemClassNames.formSceneSidebarMenu)

interface IProps {
    mixes?: string[]
}

const links = [
    {
        link: Routes.form.firstExample(),
        title: 'Form First Example'
    },
    {
        link: Routes.form.secondExample(),
        title: 'Form Second Example'
    },
    {
        link: Routes.form.thirdExample(),
        title: 'Form Third Example'
    }
]

const FormSceneSidebarMenu = (props: IProps) => {
    const {
        mixes = []
    } = props

    const classNames = [
        bem.block,
        bem.mixes(mixes)
    ].join(' ').trim()

    return (
        <div className={classNames}>
            <div className={bem.elem('list')}>
                {links.map((item) => {
                    return (
                        <NavLink to={item.link}
                                 key={item.link}
                                 exact
                                 activeClassName={bem.is('active')}
                                 className={bem.elem('link')}
                        >{item.title}</NavLink>
                    )
                })}
            </div>
        </div>
    )
}

export default FormSceneSidebarMenu