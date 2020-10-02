import * as React from 'react'
import {IFieldValidationStatus} from '../../../../models/field-validation-status'

export namespace ITextField {
    export interface BaseProps extends IFieldValidationStatus {
        label: string
        disabled?: boolean
        autofocus?: boolean

        onChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): unknown
        value: string
    }

    export interface TextareaProps extends BaseProps {
        rows?: number
    }

    export interface InputProps extends BaseProps {
        clearValue?(): unknown
    }
}
