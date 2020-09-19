import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects'
import getService from '../../services'
import {IService} from '../../services/model'
import {
    EJsonPlaceholderActions, IJsonPlaceholderActionGetPost,
    IJsonPlaceholderActionGetPosts,
    jsonPlaceholderActionGetPostsError,
    jsonPlaceholderActionGetPostsSuccess, jsonPlaceholderActionGetPostSuccess
} from '../actions/jsonplaceholder.action'

const service: IService = getService()

function* getPosts(action: IJsonPlaceholderActionGetPosts) {
    try {
        const response = yield call(service.jsonPlaceholderService.getPosts)

        yield put(jsonPlaceholderActionGetPostsSuccess(response))
    } catch (error) {
        yield put(jsonPlaceholderActionGetPostsError())
    }
}

function* getPostsSaga() {
    yield takeLatest(EJsonPlaceholderActions.GetPosts, getPosts)
}

function* getPost(action: IJsonPlaceholderActionGetPost) {
    try {
        const response = yield call(service.jsonPlaceholderService.getPost, action.payload)

        yield put(jsonPlaceholderActionGetPostSuccess(response))
    } catch (error) {
        console.log(error)
    }
}

function* getPostSaga() {
    yield takeLatest(EJsonPlaceholderActions.GetPost, getPost)
}

export default function* jsonPlaceholderRootSaga() {
    yield all([
        getPostsSaga(),
        getPostSaga()
    ])
}