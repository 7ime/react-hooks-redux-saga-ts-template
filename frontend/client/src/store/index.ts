import {createStore, applyMiddleware, compose, StoreCreator} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {environment} from '../environment'
import crashDispatchLoggerMiddleware from '../middleware/crash-dispatch-logger'
import {appReducer} from './app-reducer'
import jsonPlaceholderRootSaga from './jsonplaceholder/saga'

const sagaMiddleware = createSagaMiddleware()

const appStore = createStore(appReducer, compose(
    applyMiddleware(sagaMiddleware, crashDispatchLoggerMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && environment.development ?  window.__REDUX_DEVTOOLS_EXTENSION__() : (f: Function) => f
))

sagaMiddleware.run(jsonPlaceholderRootSaga)

const getAppStore = () => appStore

export default getAppStore