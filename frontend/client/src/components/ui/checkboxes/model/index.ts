import * as React from 'react'
import {IFieldValidationStatus} from '../../../../models/field-validation-status'

export namespace ICheckbox{
    type Mod = 'primary' | 'secondary'

    export interface Props extends IFieldValidationStatus {
        value: boolean
        children: React.ReactChild | React.ReactNode

        mods?: Mod[]
        disabled?: boolean

        onChange(event: React.ChangeEvent<HTMLInputElement>): unknown
    }
}
