import { call, put, all, takeLatest } from 'redux-saga/effects'
import getService from '../../services'
import {IService} from '../../services/model'
import {
    EJsonPlaceholderActions,
    IJsonPlaceholderActionGetPosts,
    jsonPlaceholderActionGetPostsError,
    jsonPlaceholderActionGetPostsSuccess
} from '../actions/jsonplaceholder.action'

const service: IService = getService()

function* getPosts(action: IJsonPlaceholderActionGetPosts) {
    try {
        const response = yield call(service.jsonPlaceholderService.getPosts)

        yield put(jsonPlaceholderActionGetPostsSuccess(response))
    } catch (e) {
        yield put(jsonPlaceholderActionGetPostsError())
    }
}

function* getPostsSaga() {
    yield takeLatest(EJsonPlaceholderActions.GetPosts, getPosts)
}

export default function* jsonPlaceholderSagas() {
    yield all([
        getPostsSaga()
    ])
}