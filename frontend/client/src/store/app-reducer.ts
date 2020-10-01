import {combineReducers} from 'redux'
import {JsonPlaceholderState, JsonPlaceholderReducer} from './jsonplaceholder'

export interface IAppState {
    jsonPlaceholder: JsonPlaceholderState.IState
}

export const initialAppState: IAppState = {
    jsonPlaceholder: JsonPlaceholderState.initialState
}

export const appReducer = combineReducers<IAppState>({
    jsonPlaceholder: JsonPlaceholderReducer.reducer
})
