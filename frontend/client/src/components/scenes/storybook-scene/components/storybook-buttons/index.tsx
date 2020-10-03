import * as React from 'react'
import css from './index.module.scss'
import cssCommon from '../../styles/common.module.scss'
import Button from '../../../../ui/buttons/components/button'
import {ELoaderPosition} from '../../../../../constants/shared'
import ButtonLink from '../../../../ui/buttons/components/button-link'

interface IProps {

}

const StorybookButtons = (props: IProps) => {
    return (
        <div className={cssCommon.content}>
            <div className={cssCommon.subtitle}>Colors:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <Button>Default</Button>
                </div>

                <div className={css.item}>
                    <Button mods={['primary']}>Primary</Button>
                </div>

                <div className={css.item}>
                    <ButtonLink mods={['secondary']}>Secondary (Link)</ButtonLink>
                </div>

                <div className={css.item}>
                    <Button mods={['attention']}>Attention</Button>
                </div>

                <div className={css.item}>
                    <Button mods={['warning']}>Warning</Button>
                </div>
            </div>

            <div className={cssCommon.subtitle}>Loader:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <Button loader loaderPosition={ELoaderPosition.left} mods={['secondary']}>Loader Left</Button>
                </div>

                <div className={css.item}>
                    <Button loader mods={['secondary']}>Loader Middle</Button>
                </div>

                <div className={css.item}>
                    <ButtonLink loader loaderPosition={ELoaderPosition.right} mods={['primary']}>Loader Right (Link)</ButtonLink>
                </div>

                <div className={css.item}>
                    <Button loader mods={['primary']} disabled>Loader Disabled</Button>
                </div>
            </div>

            <div className={cssCommon.subtitle}>State:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <Button disabled>Disabled</Button>
                </div>
            </div>

            <div className={cssCommon.subtitle}>Form:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <Button mods={['round', 'primary']}>Round</Button>
                </div>
            </div>
        </div>
    )
}

export default StorybookButtons