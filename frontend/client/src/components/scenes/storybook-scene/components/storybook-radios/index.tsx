import * as React from 'react'
import css from './index.module.scss'
import cssCommon from '../../styles/common.module.scss'
import RadioGroup from '../../../../ui/radios/components/radio-group'
import Radio from '../../../../ui/radios/components/radio'

interface IProps {

}

const StorybookRadios = (props: IProps) => {
    const [defaultValue, setDefaultValue] = React.useState('+')

    const handleChangeDefaultValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setDefaultValue(event.target.value)
    }, [])

    const [primaryValue, setPrimaryValue] = React.useState<string | null>(null)

    const handleChangePrimaryValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPrimaryValue(event.target.value)
    }, [])

    return (
        <div className={cssCommon.content}>
            <div className={cssCommon.subtitle}>Radios:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <div className={css.itemTitle}>Default:</div>

                    <RadioGroup value={defaultValue} onChange={handleChangeDefaultValue} name={'math'}>
                        <Radio value={'+'}>Plus</Radio>
                        <Radio value={'/'}>Divided by</Radio>
                        <Radio value={'*'}>Times</Radio>
                        <Radio value={'-'}>Minus</Radio>
                    </RadioGroup>
                </div>

                <div className={css.item}>
                    <div className={css.itemTitle}>Primary:</div>

                    <RadioGroup value={primaryValue} onChange={handleChangePrimaryValue} name={'gender'}>
                        <Radio value={'male'} type={'primary'}>Male</Radio>
                        <Radio value={'female'} type={'primary'}>Divided by</Radio>
                    </RadioGroup>
                </div>


                <div className={css.item}>
                    <div className={css.itemTitle}>Error:</div>

                    <RadioGroup value={defaultValue}
                                onChange={handleChangeDefaultValue}
                                name={'error'}
                                error={[true, ['test error message']]}>
                        <Radio value={'+'}>Plus</Radio>
                        <Radio value={'/'}>Divided by</Radio>
                        <Radio value={'*'}>Times</Radio>
                        <Radio value={'-'}>Minus</Radio>
                    </RadioGroup>
                </div>

                <div className={css.item}>
                    <div className={css.itemTitle}>Success:</div>

                    <RadioGroup value={defaultValue}
                                onChange={handleChangeDefaultValue}
                                name={'success'}
                                success={[true, ['test success message']]}>
                        <Radio value={'+'}>Plus</Radio>
                        <Radio value={'/'}>Divided by</Radio>
                        <Radio value={'*'}>Times</Radio>
                        <Radio value={'-'}>Minus</Radio>
                    </RadioGroup>
                </div>
            </div>
        </div>
    )
}

export default StorybookRadios
