import * as React from 'react'
import {IRadio} from '../../model'
import css from '../../styles/radio-group.module.scss'
import MessageValidationContainer from '../../../message-validation-container'

const RadioGroup = (props: IRadio.GroupProps) => {
    const {
        value,
        name,
        children,
        error = [false, null],
        success = [false, null],
        onChange
    } = props

    const [isError, errorMessage] = error
    const [isSuccess, successMessage] = success

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event)
    }, [])

    return (
        <div className={css.radioGroup}>


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
// import {IRadio} from '../../model'
// import BemShaper from '../../../../../bem/bem-shaper'
// import {EBemClassNames} from '../../../../../bem/bem-class-names'
// import Radio from '../radio'
//
// const bem = new BemShaper(EBemClassNames.radioGroup)
//
// interface IState {
//     value: string
//     checked: boolean
// }
//
// export default class RadioGroup extends React.PureComponent<IRadio.RadioGroupProps, IState> {
//     state = {
//         value: this.props.defaultValue ? this.props.defaultValue : '',
//         checked: !!this.props.defaultValue
//     }
//
//     static getDerivedStateFromProps(props: IRadio.RadioGroupProps, state: IState): Partial<IState> | null {
//         if (props.externalManage) {
//             return {
//                 value: props.externalManage.value ? props.externalManage.value : '',
//                 checked: !!props.externalManage.value
//             }
//         }
//
//         return null
//     }
//
//     handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const checked = event.target.checked
//         const value = event.target.value
//
//         if (this.props.externalManage) {
//             this.props.externalManage.onUpdateValue(value)
//         } else {
//             this.setState({
//                 checked,
//                 value
//             })
//         }
//     }
//
//     render() {
//         const {
//             mods = [],
//             mixes = [],
//             values,
//             controlName,
//             error
//         } = this.props
//
//         const classNames = [
//             bem.block,
//             bem.mods(mods),
//             bem.mixes(mixes),
//             error && bem.is('error')
//         ].join(' ').trim()
//
//         return (
//             <div className={classNames}>
//                 {values.map((radioValue: IRadio.RadioGroupValue) => {
//                     const {
//                         label,
//                         value,
//                         ...dynamicProps
//                     } = radioValue
//
//                     const checked = value === this.state.value ? this.state.checked : false
//
//                     return (
//                         <div className={bem.elem('control')} key={value}>
//                             <Radio label={label}
//                                    controlName={controlName}
//                                    value={value}
//                                    checked={checked}
//                                    onChange={this.handleChange}
//                                    {...dynamicProps}/>
//                         </div>
//                     )
//                 })}
//                 {error && <div className={bem.elem('error-container')}>{error}</div>}
//             </div>
//         )
//     }
// }
