import * as React from 'react'
import {JsonPlaceholderAction} from '../../../../store/jsonplaceholder'
import {useDispatch} from 'react-redux'

export const useGetPosts = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(JsonPlaceholderAction.getPosts())
    }, [0])
}
