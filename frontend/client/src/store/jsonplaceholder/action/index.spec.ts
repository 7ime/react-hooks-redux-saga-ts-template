import {
    EJsonPlaceholderActions,
    IJsonPlaceholderActionGetPost,
    IJsonPlaceholderActionGetPosts,
    IJsonPlaceholderActionGetPostsError,
    IJsonPlaceholderActionGetPostsSuccess, IJsonPlaceholderActionGetPostSuccess, IJsonPlaceholderActionResetState,
    jsonPlaceholderActionGetPost,
    jsonPlaceholderActionGetPosts,
    jsonPlaceholderActionGetPostsError,
    jsonPlaceholderActionGetPostsSuccess, jsonPlaceholderActionGetPostSuccess, jsonPlaceholderActionGetResetState
} from './index'
import {IJsonPlaceholder} from '../../../entities/jsonplaceholder.entity'
import MockJsonPlaceholder from '../../../__tests__/mock/jsonplaceholder'

describe('jsonPlaceholder actions', () => {

    it('jsonPlaceholderActionGetPosts', () => {

        const expected: IJsonPlaceholderActionGetPosts = {
            type: EJsonPlaceholderActions.GetPosts
        }

        expect(jsonPlaceholderActionGetPosts()).toEqual(expected)
    })

    it('jsonPlaceholderActionGetPostsSuccess', () => {
        const payload: IJsonPlaceholder.ModelDTO[] = [
            MockJsonPlaceholder.modelDTO()
        ]

        const expected: IJsonPlaceholderActionGetPostsSuccess = {
            type: EJsonPlaceholderActions.GetPostsSuccess,
            payload
        }

        expect(jsonPlaceholderActionGetPostsSuccess(payload)).toEqual(expected)
    })

    it('jsonPlaceholderActionGetPostsError', () => {

        const expected: IJsonPlaceholderActionGetPostsError = {
            type: EJsonPlaceholderActions.GetPostsError
        }

        expect(jsonPlaceholderActionGetPostsError()).toEqual(expected)
    })

    it('jsonPlaceholderActionGetPost', () => {

        const expected: IJsonPlaceholderActionGetPost = {
            type: EJsonPlaceholderActions.GetPost,
            payload: 1
        }

        expect(jsonPlaceholderActionGetPost(1)).toEqual(expected)
    })

    it('jsonPlaceholderActionGetPostSuccess', () => {
        const payload: IJsonPlaceholder.ModelDTO = MockJsonPlaceholder.modelDTO()

        const expected: IJsonPlaceholderActionGetPostSuccess = {
            type: EJsonPlaceholderActions.GetPostSuccess,
            payload
        }

        expect(jsonPlaceholderActionGetPostSuccess(payload)).toEqual(expected)
    })

    it('jsonPlaceholderActionGetResetState', () => {

        const expected: IJsonPlaceholderActionResetState = {
            type: EJsonPlaceholderActions.ResetState
        }

        expect(jsonPlaceholderActionGetResetState()).toEqual(expected)
    })
})