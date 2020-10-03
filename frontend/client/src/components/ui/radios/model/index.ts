import * as React from 'react'
import {IFieldValidationStatus} from '../../../../models/field-validation-status'

export namespace IRadio {
    interface BaseProps extends IFieldValidationStatus{
        children: React.ReactChild | React.ReactNode
        disabled?: boolean
    }

    export interface ButtonProps extends BaseProps {
        value: string
        type?: 'primary' | 'secondary'
        checked?: boolean
        name?: string

        onChange?(event: React.ChangeEvent<HTMLInputElement>): unknown
    }

    export interface GroupProps extends BaseProps {
        value: string | null
        name: string

        onChange(event: React.ChangeEvent<HTMLInputElement>): unknown
    }
}
