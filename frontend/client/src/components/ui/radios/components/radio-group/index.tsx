import * as React from 'react'
import {IRadio} from '../../model'
import css from '../../styles/radio-group.module.scss'
import MessageValidationContainer from '../../../message-validation-container'
import {invariant} from '../../../../../helpers/invariant'

const RadioGroup = (props: IRadio.GroupProps) => {
    const {
        value,
        name,
        children,
        disabled,
        error = [false, null],
        success = [false, null],
        onChange
    } = props

    const [isError, errorMessage] = error
    const [isSuccess, successMessage] = success

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event)
    }, [onChange])

    return (
        <div className={css.radioGroup}>
            {
                React.Children.map(children, (child) => {
                    invariant(React.isValidElement(child), 'child element of the radio group is not valid')

                    const checked = child.props.value === value

                    return React.cloneElement<IRadio.ButtonProps>(child, {
                        onChange: handleChange,
                        name,
                        checked,
                        disabled: child.props.disabled || disabled,
                        error: child.props.error || error,
                        success: child.props.success || success
                    })
                })
            }

            {isSuccess && successMessage && (
                <MessageValidationContainer parentClass={css.messageContainer}
                                            type={'success'}
                                            messageList={successMessage}/>
            )}
            {isError && errorMessage && (
                <MessageValidationContainer parentClass={css.messageContainer}
                                            type={'error'}
                                            messageList={errorMessage}/>
            )}
        </div>
    )
}

export default React.memo(RadioGroup)
