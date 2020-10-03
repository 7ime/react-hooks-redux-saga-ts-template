import * as React from 'react'
import classnames from 'classnames'
import {v4 as uuid} from 'uuid'
import {ICheckbox} from '../../model'
import css from '../../styles/checkbox.module.scss'
import MessageValidationContainer from '../../../message-validation-container'
import CSSModules from '../../../../../toolbox/css-modules'

interface IProps extends ICheckbox.Props {

}

const Checkbox = (props: IProps) => {
    const {
        value: checkboxValue = false,
        mods = [],
        disabled = false,
        error = [false, null],
        success = [false, null],
        children,
        onChange
    } = props

    const [isError, errorMessage] = error
    const [isSuccess, successMessage] = success

    const [value, setValue] = React.useState(checkboxValue)
    const [uuidCheckbox, setUuidCheckbox] = React.useState(uuid())

    React.useEffect(() => {
        setValue(checkboxValue)
    }, [checkboxValue])

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event)
    }, [])

    const modsCssModules = CSSModules.extractClassNamesForArray(mods, css)

    const classNames = classnames(
        css.checkbox,
        modsCssModules,
        {[css.is_checked]: value},
        {[css.is_disabled]: disabled},
        {[css.is_error]: isError},
        {[css.is_success]: isSuccess},
    )

    return (
        <div className={classNames}>
            <label htmlFor={uuidCheckbox} className={css.content}>
                <input type='checkbox'
                    onChange={handleChange}
                    className={css.control}
                    checked={value}
                    id={uuidCheckbox}
                />
                <div className={css.pseudoControl}/>
                <div className={css.description}>{children}</div>
            </label>

            {isSuccess && successMessage && (
                <MessageValidationContainer parentClass={css.messageContainer}
                                            mods={['success']}
                                            messageList={successMessage}/>
            )}
            {isError && errorMessage && (
                <MessageValidationContainer parentClass={css.messageContainer}
                                            mods={['error']}
                                            messageList={errorMessage}/>
            )}
        </div>
    )
}

export default React.memo(Checkbox)
