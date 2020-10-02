import * as React from 'react'
import {IFieldValidationStatus} from '../../../../models/field-validation-status'

export namespace ITextField {
    export interface BaseProps extends IFieldValidationStatus {
        label: string
        disabled?: boolean
        autofocus?: boolean

        onChange(event: React.ChangeEvent<HTMLInputElement>): unknown
        clearValue?(): unknown
        value: string
    }

    export interface TextareaProps extends BaseProps {

    }

    export interface InputProps extends BaseProps {

    }
}
