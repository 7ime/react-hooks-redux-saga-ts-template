import {jsonPlaceholderReducer} from './index'
import {IJsonPlaceholderState, initialJsonPlaceholderState} from '../state'
import {
    jsonPlaceholderActionGetPosts,
    jsonPlaceholderActionGetPostsSuccess,
    jsonPlaceholderActionGetResetState
} from '../action'
import MockJsonPlaceholder from '../../../__tests__/mock/jsonplaceholder'

describe('jsonPlaceholder reducer', () => {

    it('should return the initial state', () => {
        expect(jsonPlaceholderReducer(undefined, {} as any)).toEqual(initialJsonPlaceholderState)
    })

    it('should handle EJsonPlaceholderActions.GetPosts', () => {
        expect(jsonPlaceholderReducer(
            initialJsonPlaceholderState,
            jsonPlaceholderActionGetPosts()
        )).toMatchObject<Partial<IJsonPlaceholderState>>({
            isLoadingPosts: true
        })
    })

    it('should handle EJsonPlaceholderActions.GetPostsSuccess', () => {
        const posts = [MockJsonPlaceholder.modelDTO()]

        expect(jsonPlaceholderReducer(
            initialJsonPlaceholderState,
            jsonPlaceholderActionGetPostsSuccess(posts)
        )).toMatchObject<Partial<IJsonPlaceholderState>>({
            isLoadingPosts: false,
            posts
        })
    })

    it('should handle EJsonPlaceholderActions.ResetState', () => {
        expect(jsonPlaceholderReducer(
            {
                ...initialJsonPlaceholderState,
                isLoadingPosts: true
            },
            jsonPlaceholderActionGetResetState()
        )).toEqual(initialJsonPlaceholderState)
    })
})