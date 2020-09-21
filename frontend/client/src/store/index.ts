import {createStore, applyMiddleware, compose, StoreCreator} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {appReducer} from './reducers/app.reducer'
import jsonPlaceholderRootSaga from './sagas/jsonplaceholder.saga'
import {environment} from '../environment'
import crashDispatchLogger from '../middleware/crash-dispatch-logger'

const sagaMiddleware = createSagaMiddleware()

const appStore = createStore(appReducer, compose(
    applyMiddleware(sagaMiddleware, crashDispatchLogger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && environment.development ?  window.__REDUX_DEVTOOLS_EXTENSION__() : (f: StoreCreator) => f
))

sagaMiddleware.run(jsonPlaceholderRootSaga)

const getAppStore = () => appStore

export default getAppStore