import * as React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import LoaderWithInfo from '../presentational/loader-with-info'
import Header from '../containers/header'
import {routers} from '../../routing/router'
import {IRouting} from '../../routing/model'
import css from './index.module.scss'
import Routes from '../../routing/routes'

const getLoaderElem = () => {
    return (
        <div>
            <LoaderWithInfo
                title={'Loading...'}
                description={'Wait please when all data will be loaded'}
            />
        </div>
    )
}

const App = () => {
    const isLogged = true

    return (
        <div className={css.app}>
            <div className={css.content}>
                <div className={css.header}>
                    <Header />
                </div>
                <React.Suspense fallback={getLoaderElem()}>
                    <Switch>
                        {routers.map((router: IRouting.Router) => {
                            const {
                                component,
                                path,
                                exact,
                                checkAuth = false
                            } = router

                            if (!checkAuth || checkAuth && isLogged) {
                                return (
                                    <Route key={path} path={path} exact={exact} component={component}/>
                                )
                            }

                            return null
                        })}
                        <Redirect from='*' to={Routes.home.root()} exact/>
                    </Switch>
                </React.Suspense>
            </div>
        </div>
    )
}

export default App
