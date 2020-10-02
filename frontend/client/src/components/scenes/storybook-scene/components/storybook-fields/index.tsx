import * as React from 'react'
import css from './index.module.scss'
import cssCommon from '../../styles/common.module.scss'
import Input from '../../../../ui/textfields/components/input'

interface IProps {

}

const StorybookFields = (props: IProps) => {
    return (
        <div className={cssCommon.content}>
            <div className={cssCommon.subtitle}>Textfields:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <Input label={'Default'}/>
                </div>
            </div>
        </div>
    )
}

export default StorybookFields
