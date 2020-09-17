import * as React from 'react'
import {Helmet} from 'react-helmet'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import css from './index.module.scss'
import {IRouting} from '../../../routing/model'
import Storybook from './components/storybook'
import Routes from '../../../routing/routes'
import StorybookVariables from './components/storybook-variables'

interface IProps extends IRouting.Props {

}

const StorybookScene = (props: IProps) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Storybook</title>
            </Helmet>
            <div className={'container'}>
                <div className={css.title}>Storybook</div>

                <Switch>
                    <Route path={Routes.storybook.root()} exact component={Storybook} />
                    <Route path={Routes.storybook.variables()} exact component={StorybookVariables} />
                    <Redirect from='*' to={Routes.storybook.variables()}/>
                </Switch>
            </div>
        </React.Fragment>
    )
}

export default StorybookScene