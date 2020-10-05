import * as React from 'react'
import css from './index.module.scss'
import {useHistory} from 'react-router'
import {NavLink} from 'react-router-dom'
import Routes from '../../../../../routing/routes'

interface IProps {

}

const links = [
    ['Ecosystem', Routes.storybook.ecosystem()],
    ['Variables', Routes.storybook.variables()],
    ['Typography', Routes.storybook.typography()],
    ['Button', Routes.storybook.buttons()],
    ['Loader', Routes.storybook.loaders()],
    ['Scrollbar', Routes.storybook.scrollbar()],
    ['Fields', Routes.storybook.fields()],
    ['Checkboxes', Routes.storybook.checkboxes()],
    ['Radios', Routes.storybook.radios()],
    ['Internationalization', Routes.storybook.internationalization()],
]

const Storybook = (props: IProps) => {
    const history = useHistory()

    return (
        <div className={css.list}>
            {
                links.map(([title, url]) => {
                    return (
                        <NavLink key={url} to={url}
                                 exact
                                 activeClassName={css.is_active}
                                 className={css.link}
                        >{title}</NavLink>
                    )
                })
            }
        </div>
    )
}

export default Storybook
