import * as React from 'react'
import css from './index.module.scss'
import cssCommon from '../../styles/common.module.scss'
import Loader from '../../../../ui/loaders/components/loader'

interface IProps {

}

const StorybookLoaders = (props: IProps) => {
    return (
        <div className={css.content}>
            <div className={cssCommon.subtitle}>Colors:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <div className={css.itemTitle}>Default</div>
                    <Loader/>
                </div>

                <div className={css.item}>
                    <div className={css.itemTitle}>Primary</div>
                    <Loader mods={['primary']}/>
                </div>

                <div className={css.item}>
                    <div className={css.itemTitle}>Secondary</div>
                    <Loader mods={['secondary']}/>
                </div>
            </div>

            <div className={cssCommon.subtitle}>Size:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <div className={css.itemTitle}>Large</div>
                    <Loader mods={['large']}/>
                </div>

                <div className={css.item}>
                    <div className={css.itemTitle}>Default</div>
                    <Loader/>
                </div>

                <div className={css.item}>
                    <div className={css.itemTitle}>Small</div>
                    <Loader mods={['small']}/>
                </div>
            </div>
        </div>
    )
}

export default StorybookLoaders