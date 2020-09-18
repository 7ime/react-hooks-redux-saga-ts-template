import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {appReducer} from './reducers/app.reducer'
import jsonPlaceholderSagas from './sagas/jsonplaceholder.saga'

const sagaMiddleware = createSagaMiddleware()

const appStore = createStore(appReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(jsonPlaceholderSagas)

const getAppStore = () => appStore

export default getAppStore
