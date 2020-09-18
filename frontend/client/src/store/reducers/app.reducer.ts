import {IAppState} from '../state/app.state'
import {jsonPlaceholderReducer} from './jsonplaceholder.reducer'
import {combineReducers} from 'redux'

export const appReducer = combineReducers<IAppState>({
    jsonPlaceholder: jsonPlaceholderReducer
})