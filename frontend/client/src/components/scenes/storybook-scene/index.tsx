import * as React from 'react'
import {Helmet} from 'react-helmet'
import css from './index.module.scss'
import {IRouting} from '../../../routing/model'

interface IProps extends IRouting.Props {

}

const StorybookScene = (props: IProps) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Storybook</title>
            </Helmet>
            <div className={'container'}>
                <div className={css.title}>Storybook</div>

                <div className={css.list}>
                    <div className={css.item}>Variables</div>
                    <div className={css.item}>Typography</div>
                    <div className={css.item}>Button</div>
                    <div className={css.item}>Loader</div>
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
            </div>
        </React.Fragment>
    )
}

export default StorybookScene