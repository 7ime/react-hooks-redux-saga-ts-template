import {Maybe} from '../../toolbox/custom-types'
import {IJsonPlaceholder} from '../../entities/jsonplaceholder.entity'

export interface IJsonPlaceholderState {
    posts: Maybe<IJsonPlaceholder.Model[]>
    isLoadingPosts: boolean
    isGetPostsError: boolean
    post: Maybe<IJsonPlaceholder.Model>
}

export const initialJsonPlaceholderState: IJsonPlaceholderState = {
    posts: null,
    isGetPostsError: false,
    isLoadingPosts: false,
    post: null
}