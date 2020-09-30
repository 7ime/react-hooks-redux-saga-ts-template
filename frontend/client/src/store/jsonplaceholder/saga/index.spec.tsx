import {IJsonPlaceholder} from '../../../entities/jsonplaceholder.entity'
import MockJsonPlaceholder from '../../../__tests__/mock/jsonplaceholder'
import {expectSaga} from 'redux-saga-test-plan'
import {getPost, getPosts} from './index'
import getService from '../../../services'
import {call} from 'redux-saga-test-plan/matchers'
import {jsonPlaceholderReducer} from '../reducer'
import {IJsonPlaceholderState, initialJsonPlaceholderState} from '../state'
import {jsonPlaceholderActionGetPost, jsonPlaceholderActionGetPosts} from '../action'
import {ISagaTestRunResult} from '../../../__tests__/model/shared'

const service = getService()

describe('jsonPlaceholder saga', () => {

    it('getPosts', () => {
        const response: IJsonPlaceholder.ModelDTO[] = [MockJsonPlaceholder.modelDTO({id: 99})]

        return expectSaga(getPosts, jsonPlaceholderActionGetPosts()).provide([
            [call(service.jsonPlaceholderService.getPosts), response]
        ])
            .withReducer<IJsonPlaceholderState>(jsonPlaceholderReducer, initialJsonPlaceholderState)
            .dispatch(jsonPlaceholderActionGetPosts())
            .run()
            .then((result: ISagaTestRunResult<IJsonPlaceholderState>) => expect(result.storeState.posts).toEqual(response))
    })

    it('getPost', () => {
        const id = 999
        const response: IJsonPlaceholder.ModelDTO = MockJsonPlaceholder.modelDTO({id})

        return expectSaga(getPost, jsonPlaceholderActionGetPost(id)).provide([
            [call(service.jsonPlaceholderService.getPost, id), response]
        ])
            .withReducer<IJsonPlaceholderState>(jsonPlaceholderReducer, initialJsonPlaceholderState)
            .dispatch(jsonPlaceholderActionGetPost(id))
            .run()
            .then((result: ISagaTestRunResult<IJsonPlaceholderState>) => expect(result.storeState.post).toEqual(response))
    })
})