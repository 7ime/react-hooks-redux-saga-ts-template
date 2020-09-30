import {combineReducers} from 'redux'
import {IJsonPlaceholderState} from './jsonplaceholder/state'
import {jsonPlaceholderReducer} from './jsonplaceholder/reducer'

export interface IAppState {
    jsonPlaceholder: IJsonPlaceholderState
}

export const appReducer = combineReducers<IAppState>({
    jsonPlaceholder: jsonPlaceholderReducer
})
