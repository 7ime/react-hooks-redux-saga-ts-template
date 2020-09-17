import * as React from 'react'
import Routes from './routes'
import {IRouting} from './model'

const HomeScene = React.lazy(() => import('../components/scenes/home-scene'))
const FormScene = React.lazy(() => import('../components/scenes/form-scene'))
const HooksScene = React.lazy(() => import('../components/scenes/hooks-scene'))
const StorybookScene = React.lazy(() => import('../components/scenes/storybook-scene'))

export const routers: IRouting.Router[] = [
    {
        path: Routes.home.root(),
        exact: true,
        component: HomeScene
    },
    {
        path: Routes.form.root(),
        component: FormScene
    },
    {
        path: Routes.hooks.root(),
        component: HooksScene
    },
    {
        path: Routes.storybook.root(),
        component: StorybookScene
    }
]