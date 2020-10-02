import * as React from 'react'
import classnames from 'classnames'
import {ITextField} from '../../model'
import css from '../../styles/textfield.module.scss'
import {useTextField} from '../../hooks/use-textfield'

enum EType {
    password = 'password',
    text = 'text',
}

interface IProps extends ITextField.InputProps {

}

const InputPassword = (props: IProps) => {
    const {
        clearValue,
        label
    } = props

    const {
        handleFocus,
        handleBlur,
        handleChange,
        isError,
        errorMessage,
        isSuccess,
        successMessage,
        value,
        isFocused,
        nodeEl,
        autofocus,
        classNames
    } = useTextField<HTMLInputElement>(props)

    const [type, setType] = React.useState(EType.password)

    const handlerChangeType = React.useCallback(() => {
        const newType = type === EType.password ? EType.text : EType.password

        setType(newType)
    }, [type])

    const handleClearValue = React.useCallback(() => {
        clearValue && clearValue()
    }, [])

    const classNamesForTriggerPassword = classnames(
        css.trigger,
        {[css.triggerEye]: type === EType.password},
        {[css.triggerEyeOff]: type === EType.text},
    )

    return (
        <div className={classNames}>
            <label className={css.label}>{label}</label>
            <div className={classnames(css.controlWrap, css.controlWrapInput)}
                 onFocus={handleFocus}
                 onBlur={handleBlur}
                 tabIndex={0}>
                <input className={classnames(css.control, css.controlInput)}
                       onChange={handleChange}
                       autoFocus={autofocus}
                       ref={nodeEl}
                       value={value}
                       tabIndex={-1}
                       type={type}/>
                {
                    isFocused && clearValue && (
                        <div className={css.triggers}>
                            <div className={classNamesForTriggerPassword} onMouseDown={handlerChangeType}/>
                            <div className={classnames(css.trigger, css.triggerClear)} onMouseDown={handleClearValue}/>
                        </div>
                    )
                }
            </div>

            {isSuccess && successMessage && <div className={css.successContainer}>{successMessage}</div>}
            {isError && errorMessage && <div className={css.errorContainer}>{errorMessage}</div>}
        </div>
    )
}

export default React.memo(InputPassword)
