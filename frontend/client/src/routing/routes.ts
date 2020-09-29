export default class Routes {
    static home = class {
        static root = () => '/'
    }

    static form = class {
        static root = () => '/form'
        static firstExample = () => '/form/example-1'
        static secondExample = () => '/form/example-2'
        static thirdExample = () => '/form/example-3'
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
    }
}