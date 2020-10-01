import * as React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import css from './index.module.scss'
import {JsonPlaceholderAction, JsonPlaceholderSelector} from '../../../../../store/jsonplaceholder'
import {IJsonPlaceholder} from '../../../../../entities/jsonplaceholder'
import {Maybe} from '../../../../../toolbox/custom-types'

interface IProps {

}

const Hooks = (props: IProps) => {
    const [count, setCount] = React.useState<number>(0)

    const dispatch = useDispatch()
    const countOfPosts: Maybe<number> = useSelector(JsonPlaceholderSelector.totalCountOfPosts)

    React.useEffect(() => {
        dispatch(JsonPlaceholderAction.getPosts())
        dispatch(JsonPlaceholderAction.getPost(1))

        return () => {
            dispatch(JsonPlaceholderAction.resetState())
        }
    }, [0])

    return (
        <div className={css.content}>
            {
                countOfPosts !== null ? <h4>Count of posts: {countOfPosts}</h4> : null
            }
        </div>
    )
}

export default Hooks
