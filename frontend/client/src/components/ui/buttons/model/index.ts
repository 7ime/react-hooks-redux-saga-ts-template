import * as React from 'react'
import {ELoaderPosition} from '../../../../constants/shared'

namespace IButton {
    export type LoaderPosition = ELoaderPosition
    export type Target = '_blank' | '_self' | '_parent' | '_top'
    export type ButtonType = 'button' | 'submit'

    export type Mods = 'primary' | 'secondary' | 'warning' | 'round' | 'attention'

    interface BaseProps {
        mods?: Mods[]
        loader?: boolean
        loaderPosition?: LoaderPosition
        disabled?: boolean
        title?: string
        onMouseDown?(event: React.MouseEvent): unknown
        onMouseUp?(event: React.MouseEvent): unknown
        onClick?(event: React.MouseEvent): unknown
        onFocus?(event: React.FocusEvent): unknown
        onBlur?(event: React.FocusEvent): unknown

        children?: React.ReactChild | React.ReactNode
    }

    export interface ButtonProps extends BaseProps {
        type?: ButtonType
    }

    export interface ButtonLinkProps extends BaseProps {
        href?: string
        target?: Target
    }
}

export default IButton
