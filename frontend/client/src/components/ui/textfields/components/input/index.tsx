import * as React from 'react'
import classnames from 'classnames'
import {ITextField} from '../../model'
import css from '../../styles/textfield.module.scss'

interface IProps extends ITextField.InputProps {

}

const Input = (props: IProps) => {
    const {
        disabled = false,
        autofocus = false,
        value: inputValue = '',
        error = [false, null],
        success = [false, null],
        label,
        onChange,
        clearValue
    } = props

    const [isError, errorMessage] = error
    const [isSuccess, successMessage] = success

    const inputEl = React.useRef<HTMLInputElement>(null)
    const [value, setValue] = React.useState('')
    const [isFocused, setFocus] = React.useState(autofocus)
    const [isBlur, setBlur] = React.useState(true)

    React.useEffect(() => {
        setValue(inputValue)
    }, [inputValue])

    const classNames = classnames(
        css.textfield,
        {[css.is_disabled]: disabled},
        {[css.is_error]: isError},
        {[css.is_success]: isSuccess},
        {[css.is_blur]: isBlur && !value},
        {[css.is_focused]: isFocused},
    )

    const handleFocus = () => {
        const node = inputEl.current

        if (node) {
            node.focus()
        }

        setBlur(false)
        setFocus(true)
    }

    const handleBlur = () => {
        const node = inputEl.current

        setBlur(!(node !== null && node.value))
        setFocus(false)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event)
    }

    const handleClearValue = () => {
        clearValue && clearValue()
    }

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
                       ref={inputEl}
                       value={value}
                       type={'text'}/>
                {
                    isFocused && clearValue && (
                        <div className={css.triggers}>
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

export default Input
