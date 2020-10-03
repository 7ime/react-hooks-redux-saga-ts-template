import * as React from 'react'
import {IFieldValidationStatus} from '../../../../models/field-validation-status'

export namespace IRadio {
    export interface ButtonProps {
        value: string
        type?: 'primary' | 'secondary'
        disabled?: boolean
        checked?: boolean
        name?: string
        error?: boolean
        success?: boolean

        children: React.ReactChild | React.ReactNode
        onChange?(event: React.ChangeEvent<HTMLInputElement>): unknown
    }

    export interface GroupProps extends IFieldValidationStatus {
        value: string | null
        name: string

        children: React.ReactChild | React.ReactNode
        onChange(event: React.ChangeEvent<HTMLInputElement>): unknown
    }
}
