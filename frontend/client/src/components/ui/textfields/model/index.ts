import * as React from 'react'
import {IFieldValidationStatus} from '../../../../models/field-validation-status'

export namespace ITextField {
    export interface BaseProps extends IFieldValidationStatus {
        label: string
        disabled?: boolean
        focused?: boolean

        onChange?(event: React.ChangeEvent<HTMLInputElement>): unknown
    }

    export interface TextareaProps extends BaseProps {
        defaultValue?: string
    }

    export interface InputProps extends BaseProps {
        value?: string
    }
}
