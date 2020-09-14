import * as React from 'react'
import Routes from './routes'

const HomeScene = React.lazy(() => import('../components/scenes/home-scene'))
const FormScene = React.lazy(() => import('../components/scenes/form-scene'))

export interface Router {
    exact?: boolean
    path: string
    component: React.LazyExoticComponent<any>
    checkAuth?: boolean
}

export const router: Router[] = [
    {
        path: Routes.home.root(),
        exact: true,
        component: HomeScene
    },
    {
        path: Routes.form.root(),
        component: FormScene
    }
]