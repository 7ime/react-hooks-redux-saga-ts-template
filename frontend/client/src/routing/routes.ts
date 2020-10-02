export default class Routes {
    static home = class {
        static root = () => '/'
    }

    static hooks = class {
        static root = () => '/hooks'
    }

    static storybook = class {
        static root = () => '/storybook'
        static variables = () => '/storybook/variables'
        static buttons = () => '/storybook/buttons'
        static loaders = () => '/storybook/loaders'
        static typography = () => '/storybook/typography'
        static scrollbar = () => '/storybook/scrollbar'
        static fields = () => '/storybook/fields'
    }
}
