import * as React from 'react'
import css from './index.module.scss'
import cssCommon from '../../styles/common.module.scss'
import Checkbox from '../../../../ui/checkboxes/components/checkbox'
import {useMemoizedMods} from '../../../../hook-helpers/use-memoized-mods'

interface IProps {

}

const StorybookCheckboxes = (props: IProps) => {
    const [defaultValue, setDefaultValue] = React.useState(true)

    const handleChangeDefaultValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setDefaultValue(event.target.checked)
    }, [])

    const [disabledValue, setDisabledValue] = React.useState(true)

    const handleChangeDisabledValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setDisabledValue(event.target.checked)
    }, [])

    const [errorValue, setErrorValue] = React.useState(false)

    const handleChangeErrorValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setErrorValue(event.target.checked)
    }, [])

    const [successValue, setSuccessValue] = React.useState(true)

    const handleChangeSuccessValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSuccessValue(event.target.checked)
    }, [])

    return (
        <div className={cssCommon.content}>
            <div className={cssCommon.subtitle}>Checkboxes:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <div className={css.itemTitle}>Default:</div>
                    <Checkbox value={defaultValue}
                              onChange={handleChangeDefaultValue}>You agree to the privacy policy</Checkbox>
                </div>

                <div className={css.item}>
                    <div className={css.itemTitle}>Primary:</div>
                    <Checkbox value={defaultValue}
                              mods={useMemoizedMods(['primary'])}
                              onChange={handleChangeDefaultValue}>You agree to the privacy policy</Checkbox>
                </div>

                <div className={css.item}>
                    <div className={css.itemTitle}>Secondary:</div>
                    <Checkbox value={defaultValue}
                              mods={useMemoizedMods(['secondary'])}
                              onChange={handleChangeDefaultValue}>You agree to the privacy policy</Checkbox>
                </div>

                <div className={css.item}>
                    <div className={css.itemTitle}>Disabled:</div>
                    <Checkbox value={disabledValue}
                              disabled
                              onChange={handleChangeDisabledValue}>You agree to the privacy policy</Checkbox>
                </div>

                <div className={css.item}>
                    <div className={css.itemTitle}>Error:</div>
                    <Checkbox value={errorValue}
                              error={React.useMemo(() => [true, ['test error message']], [])}
                              onChange={handleChangeErrorValue}>You agree to the privacy policy</Checkbox>
                </div>

                <div className={css.item}>
                    <div className={css.itemTitle}>Success:</div>
                    <Checkbox value={successValue}
                              success={React.useMemo(() => [true, ['test success message']], [])}
                              onChange={handleChangeSuccessValue}>You agree to the privacy policy</Checkbox>
                </div>
            </div>
        </div>
    )
}

export default StorybookCheckboxes
