import * as React from 'react'
import {Helmet} from 'react-helmet'
import {IRouting} from '../../../routing/model'
import css from 'index.module.scss'
import Hooks from './components/hooks'

interface IProps extends IRouting.Props {

}

const HooksScene = (props: IProps) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Hooks Page</title>
            </Helmet>
            <div className={'container'}>
                <Hooks/>
            </div>
        </React.Fragment>
    )
}

export default HooksScene
