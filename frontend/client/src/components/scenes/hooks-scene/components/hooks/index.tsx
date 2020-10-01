import * as React from 'react'
import {useHistory} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import css from './index.module.scss'
import {JsonPlaceholderAction} from '../../../../../store/jsonplaceholder'

interface IProps {

}

const Hooks = (props: IProps) => {
    const [count, setCount] = React.useState<number>(0)
    const [status, setStatus] = React.useState(false)

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(JsonPlaceholderAction.getPosts())
        dispatch(JsonPlaceholderAction.getPost(1))

        return () => {
            dispatch(JsonPlaceholderAction.resetState())
        }
    }, [0])

    return (

        <div className={css.test}>
            <p className={'area'}>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <br/>
            <div>{status ? 'online' : 'offline'}</div>
        </div>
    )
}

export default Hooks
