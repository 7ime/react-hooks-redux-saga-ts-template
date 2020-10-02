import * as React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import css from './index.module.scss'
import {JsonPlaceholderAction, JsonPlaceholderSelector} from '../../../../../store/jsonplaceholder'
import {IJsonPlaceholder} from '../../../../../entities/jsonplaceholder'
import {Maybe} from '../../../../../toolbox/custom-types'
import {useGetPosts} from '../../hooks/use-get-posts'
import ServiceContext from '../../../../context/service-context'

interface IProps {

}

const Hooks = (props: IProps) => {
    const dispatch = useDispatch()
    const countOfPosts: Maybe<number> = useSelector(JsonPlaceholderSelector.getTotalCountOfPosts)
    const {jsonPlaceholderService} = React.useContext(ServiceContext)
    const posts: Maybe<IJsonPlaceholder.Model[]> = useSelector(JsonPlaceholderSelector.makeGetCertainNumberOfPosts(10))

    useGetPosts()

    React.useEffect(() => {
        dispatch(JsonPlaceholderAction.getPost(1))
        jsonPlaceholderService.deletePost(1)

        return () => {
            dispatch(JsonPlaceholderAction.resetState())
        }
    }, [0])

    return (
        <div className={css.content}>
            {
                countOfPosts !== null ? <h4>Count of posts: {countOfPosts}</h4> : null
            }
            {
                posts ? (
                    <div className={css.list}>
                        {
                            posts.map(({id, title, body}, index) => {
                                return (
                                    <div key={id} className={css.item}>
                                        <div className={css.title}>{index + 1}: {title}</div>
                                        <div className={css.text}>{body}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

export default Hooks
