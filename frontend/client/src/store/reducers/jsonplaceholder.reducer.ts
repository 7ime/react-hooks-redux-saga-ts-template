import {IJsonPlaceholderState, initialJsonPlaceholderState} from '../state/jsonplaceholder.state'
import {EJsonPlaceholderActions, IJsonPlaceholderActions} from '../actions/jsonplaceholder.action'

export const jsonPlaceholderReducer = (state: IJsonPlaceholderState = initialJsonPlaceholderState,
                                       action: IJsonPlaceholderActions): IJsonPlaceholderState => {
    switch (action.type) {
        case EJsonPlaceholderActions.GetPosts: {
            return {
                ...state,
                isLoadingPosts: true
            }
        }
        case EJsonPlaceholderActions.GetPostsSuccess: {
            return {
                ...state,
                isLoadingPosts: false,
                posts: action.payload
            }
        }
        case EJsonPlaceholderActions.GetPostsError: {
            return {
                ...state,
                isLoadingPosts: false,
                isGetPostsError: true
            }
        }
        case EJsonPlaceholderActions.GetPostSuccess: {
            return {
                ...state,
                post: action.payload
            }
        }
        case EJsonPlaceholderActions.ResetState: {
            return initialJsonPlaceholderState
        }
        default:
            return state
    }
}