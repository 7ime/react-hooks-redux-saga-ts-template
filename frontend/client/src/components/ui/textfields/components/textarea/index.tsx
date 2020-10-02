import * as React from 'react'
import classnames from 'classnames'
import {ITextField} from '../../model'
import css from '../../styles/textfield.module.scss'
import {useTextField} from '../../hooks/use-textfield'

interface IProps extends ITextField.TextareaProps {

}

const Textarea = (props: IProps) => {
    const {
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
    } = useTextField<HTMLTextAreaElement>(props)

    return (
        <div className={classNames}>
            <label className={css.label}>{label}</label>
            <div className={classnames(css.controlWrap, css.controlWrapInput)}
                 onFocus={handleFocus}
                 onBlur={handleBlur}
                 tabIndex={0}>
                <textarea className={classnames(css.control, css.controlTextarea, 'scrollbar')}
                       onChange={handleChange}
                       autoFocus={autofocus}
                       tabIndex={-1}
                       ref={nodeEl}
                       value={value}/>
            </div>

            {isSuccess && successMessage && <div className={css.successContainer}>{successMessage}</div>}
            {isError && errorMessage && <div className={css.errorContainer}>{errorMessage}</div>}
        </div>
    )
}

export default React.memo(Textarea)
