import * as React from 'react'
import classnames from 'classnames'
import {ITextField} from '../../model'
import css from '../../styles/textfield.module.scss'

interface IProps extends ITextField.InputProps {

}

const Input = (props: IProps) => {
    const {
        disabled = false,
        focused = false,
        value: inputValue = '',
        error = [false, null],
        success = [false, null],
        label,
        onChange
    } = props

    const [isError, errorMessage] = error
    const [isSuccess, successMessage] = success

    const [value, setValue] = React.useState(inputValue)
    const [isFocused, setBlur] = React.useState(false)
    const [isBlur, setFocus] = React.useState(true)

    const classNames = classnames(
        css.textfield,
        {[css.is_disabled]: disabled},
        {[css.is_focused]: focused},
        {[css.is_error]: isError},
        {[css.is_success]: isSuccess},
        {[css.is_blur]: isBlur},
        {[css.is_focused]: isFocused},
    )

    return (
        <div className={classNames}>
            <label className={css.label}>{label}</label>
            <div className={classnames(css.controlWrap, css.controlWrapInput)}>
                <input className={classnames(css.control, css.controlInput)}
                       type={'text'}/>
                {
                    isFocused && (
                        <div className={css.triggers}>
                            <div className={classnames(css.trigger, css.triggerClear)}/>
                        </div>
                    )
                }
                {isSuccess && successMessage ? <div className={css.successContainer}>{successMessage}</div> : null}
                {isError && errorMessage ? <div className={css.errorContainer}>{errorMessage}</div> : null}
            </div>
        </div>
    )
}

export default Input

//                     <div className={bem.elem('triggers')}>
//                         <div
//                             onMouseDown={clearValue}
//                             className={[
//                                 bem.elem('trigger'),
//                                 bem.elem('trigger', 'clear'),
//                             ].join(' ').trim()} />
//                     </div>

// import BemShaper from '../../../../../bem/bem-shaper'
// import {EBemClassNames} from '../../../../../bem/bem-class-names'
// import withInput from '../../hoc-helpers/with-input'
// import {ITextField} from '../../model'
//
// const bem = new BemShaper(EBemClassNames.textfield)
//
// interface IProps extends ITextField.InputInjectProps {
//
// }
//
// const Input = (props: IProps) => {
//     const {innerRef, isFocused, clearValue, ...dynamicProps} = props
//
//     const classNames = [
//         bem.elem('control'),
//         bem.elem('control', 'input')
//     ].join(' ').trim()
//
//     return (
//         <React.Fragment>
//             <input
//                 {...dynamicProps}
//                 ref={innerRef}
//                 type='text'
//                 className={classNames}
//             />
//             {
//                 isFocused && (
//                     <div className={bem.elem('triggers')}>
//                         <div
//                             onMouseDown={clearValue}
//                             className={[
//                                 bem.elem('trigger'),
//                                 bem.elem('trigger', 'clear'),
//                             ].join(' ').trim()} />
//                     </div>
//                 )
//             }
//         </React.Fragment>
//     )
// }
//
// export default withInput<ITextField.InputProps>(Input)
