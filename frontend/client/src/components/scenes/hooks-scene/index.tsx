import * as React from 'react'
import {Helmet} from 'react-helmet'
import Hooks from '../../containers/hooks'
import BemShaper from '../../../bem/bem-shaper'
import {EBemClassNames} from '../../../bem/bem-class-names'
import {IRouting} from '../../../routing/model'

const bem = new BemShaper(EBemClassNames.hooksScene)

interface IProps extends IRouting.Props {

}

export default class HooksScene extends React.Component<IProps, never> {
    render() {
        const classNames = [
            EBemClassNames.scene,
            bem.block
        ].join(' ').trim()

        return (
            <React.Fragment>
                <Helmet>
                    <title>Hooks Page</title>
                </Helmet>
                <div className={classNames}>
                    <div className={EBemClassNames.container}>
                        <Hooks/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}