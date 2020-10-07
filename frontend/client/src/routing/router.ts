import * as React from 'react'
import Routes from './routes'
import {IRouting} from './model'

const HomeScene = React.lazy(() => import('@components/scenes/home-scene'))
const RestApiScene = React.lazy(() => import('@components/scenes/rest-api-scene'))
const StorybookScene = React.lazy(() => import('@components/scenes/storybook-scene'))

export const routers: IRouting.Router[] = [
    {
        path: Routes.home.root(),
        exact: true,
        component: HomeScene
    },
    {
        path: Routes.restApi.root(),
        component: RestApiScene
    },
    {
        path: Routes.storybook.root(),
        component: StorybookScene
    }
]
