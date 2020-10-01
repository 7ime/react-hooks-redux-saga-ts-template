import {JsonPlaceholderAction, JsonPlaceholderState, JsonPlaceholderReducer, JsonPlaceholderSelector} from '../index'
import MockJsonPlaceholder from '../../../__tests__/mock/jsonplaceholder'
import {IAppState, initialAppState} from '../../app-reducer'

describe('jsonPlaceholder selector', () => {

    it('getTotalCountOfPosts when posts not exist', () => {
        const state: IAppState = {
            ...initialAppState
        }

        const result = JsonPlaceholderSelector.getTotalCountOfPosts(state)
        expect(result).toBeNull()
    })

    it('getTotalCountOfPosts when posts exist', () => {
        const state: IAppState = {
            ...initialAppState,
            jsonPlaceholder: {
                ...JsonPlaceholderState.initialState,
                posts: [MockJsonPlaceholder.modelDTO()]
            }
        }

        const result = JsonPlaceholderSelector.getTotalCountOfPosts(state)
        expect(result).toEqual(1)
    })
})
