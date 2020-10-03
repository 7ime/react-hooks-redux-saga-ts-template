import * as React from 'react'

export const useMemoizedMods = <T>(mods: T): T => {
    return React.useMemo(() => mods, [])
}
