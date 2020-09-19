import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {appReducer} from './reducers/app.reducer'
import jsonPlaceholderRootSaga from './sagas/jsonplaceholder.saga'

const sagaMiddleware = createSagaMiddleware()

const appStore = createStore(appReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(jsonPlaceholderRootSaga)

const getAppStore = () => appStore

export default getAppStore
