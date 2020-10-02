import {ITextField} from '../../model'
import * as React from 'react'
import classnames from 'classnames'
import css from '../../styles/textfield.module.scss'

export const useTextField = (props: ITextField.BaseProps) => {
    const {
        autofocus = false,
        disabled = false,
        value: inputValue = '',
        error = [false, null],
        success = [false, null],
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

    return {
        handleFocus,
        handleBlur,
        handleChange,
        handleClearValue,
        isError,
        errorMessage,
        isSuccess,
        successMessage,
        isBlur,
        value,
        isFocused,
        inputEl,
        autofocus,
        classNames
    }
}
