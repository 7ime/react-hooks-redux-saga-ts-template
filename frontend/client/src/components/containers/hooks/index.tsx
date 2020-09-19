import * as React from 'react'
import {IMapServicesToProps, withService} from '../../hoc-helpers/with-service'
import {IService} from '../../../services/model'
import {Link } from 'react-router-dom'
import {withRouter, useHistory} from 'react-router'
import * as qs from 'query-string'
import {useDispatch, useSelector} from 'react-redux'
import {IAppState} from '../../../store/state/app.state'
import css from './index.module.scss'
import colors from '../../../shared/styles/variables/colors.module.scss'
import {
    jsonPlaceholderActionGetPost,
    jsonPlaceholderActionGetPosts
} from '../../../store/actions/jsonplaceholder.action'

interface IProps {

}

const Hooks = (props: IProps) => {
    const [count, setCount] = React.useState<number>(0)
    const [status, setStatus] = React.useState(false)

    const history = useHistory()
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(jsonPlaceholderActionGetPosts())
        dispatch(jsonPlaceholderActionGetPost(1))
    })

    const addedOptionalParametersInUrl = () => {
        const result = qs.parse(history.location.search)
        history.push(`${history.location.pathname}?pageID=${6}`)
    }

    return (

        <div className={css.test}>
            <p className={'area'}>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)} style={{
                background: colors.yellowColor
            }}>
                Click me
            </button>
            <br/>
            <div>{status ? 'online' : 'offline'}</div>
            <Link to={'/'}>Return to home page</Link>
            <button onClick={addedOptionalParametersInUrl}>change url</button>
        </div>
    )
}

export default Hooks