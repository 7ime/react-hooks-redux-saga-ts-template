import * as React from 'react'
import css from './index.module.scss'
import {useHistory} from 'react-router'
import Routes from '../../../../../routing/routes'

interface IProps {

}

const Storybook = (props: IProps) => {
    const history = useHistory()

    return (
        <div className={css.list}>
            <div className={css.item} onClick={() => {history.push(Routes.storybook.variables())}}>Variables</div>
            <div className={css.item} onClick={() => {history.push(Routes.storybook.typography())}}>Typography</div>
            <div className={css.item} onClick={() => {history.push(Routes.storybook.buttons())}}>Button</div>
            <div className={css.item} onClick={() => {history.push(Routes.storybook.loaders())}}>Loader</div>
            <div className={css.item} onClick={() => {history.push(Routes.storybook.scrollbar())}}>Scrollbar</div>
            <div className={css.item}>Paginator</div>
            <div className={css.item}>Modal</div>
            <div className={css.item}>Popup</div>
            <div className={css.item}>Textfield</div>
            <div className={css.item}>Radio</div>
            <div className={css.item}>Checkbox</div>
            <div className={css.item}>Toggle</div>
            <div className={css.item}>Select</div>
            <div className={css.item}>Dropdown</div>
            <div className={css.item}>Tooltip</div>
            <div className={css.item}>Tabs</div>
        </div>
    )
}

export default Storybook
