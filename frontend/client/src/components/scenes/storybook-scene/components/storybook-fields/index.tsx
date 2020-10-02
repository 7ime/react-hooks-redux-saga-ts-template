import * as React from 'react'
import css from './index.module.scss'
import cssCommon from '../../styles/common.module.scss'
import Input from '../../../../ui/textfields/components/input'

interface IProps {

}

const StorybookFields = (props: IProps) => {
    return (
        <div className={cssCommon.content}>
            <div className={cssCommon.subtitle}>Inputs:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <Input label={'Default'}/>
                </div>

                <div className={css.item}>
                    <Input label={'Focused'} focused/>
                </div>

                <div className={css.item}>
                    <Input label={'Disabled'} disabled/>
                </div>

                <div className={css.item}>
                    <Input label={'Error'} error={[true, 'Test error message']}/>
                </div>

                <div className={css.item}>
                    <Input label={'Success'} success={[true, 'Test success message']}/>
                </div>
            </div>
        </div>
    )
}

export default StorybookFields
