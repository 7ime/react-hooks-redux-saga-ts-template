import * as React from 'react'
import {Helmet} from 'react-helmet'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import css from './index.module.scss'
import {IRouting} from '../../../routing/model'
import Storybook from './components/storybook'
import Routes from '../../../routing/routes'
import StorybookVariables from './components/storybook-variables'
import StorybookLoaders from './components/storybook-loaders'
import StorybookTypography from './components/storybook-typography'
import StorybookScrollbar from './components/storybook-scrollbar'
import StorybookButtons from './components/storybook-buttons'
import StorybookFields from './components/storybook-fields'

interface IProps extends IRouting.Props {

}

const getSubTitle = (url: string) => {
    switch (url) {
        case Routes.storybook.root(): return ''
        case Routes.storybook.variables(): return 'variables'
        case Routes.storybook.buttons(): return 'buttons'
        case Routes.storybook.loaders(): return 'loaders'
        case Routes.storybook.typography(): return 'typography'
        case Routes.storybook.scrollbar(): return 'scrollbar'
        case Routes.storybook.fields(): return 'fields'
    }
}

const StorybookScene = (props: IProps) => {
    const subTitle = getSubTitle(props.location.pathname)

    return (
        <React.Fragment>
            <Helmet>
                <title>Storybook</title>
            </Helmet>
            <div className={'container'}>
                <div className={css.title}>Storybook <span>{subTitle ? '- ' + subTitle : ''}</span></div>

                <Switch>
                    <Route path={Routes.storybook.root()} exact component={Storybook} />
                    <Route path={Routes.storybook.variables()} exact component={StorybookVariables} />
                    <Route path={Routes.storybook.typography()} exact component={StorybookTypography} />
                    <Route path={Routes.storybook.loaders()} exact component={StorybookLoaders} />
                    <Route path={Routes.storybook.scrollbar()} exact component={StorybookScrollbar} />
                    <Route path={Routes.storybook.buttons()} exact component={StorybookButtons} />
                    <Route path={Routes.storybook.fields()} exact component={StorybookFields} />
                    <Redirect from='*' to={Routes.storybook.variables()}/>
                </Switch>
            </div>
        </React.Fragment>
    )
}

export default StorybookScene
