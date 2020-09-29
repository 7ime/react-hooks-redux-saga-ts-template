namespace ILoader {
    export type Mods = 'primary' | 'secondary' | 'small' | 'large'

    export interface Props {
        mods?: Mods[]
    }
}

export default ILoader