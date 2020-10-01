import {appReducer, IAppState} from '../../store/app-reducer'

export default class MockAppState {
    static initialAppState = appReducer({} as IAppState, {type: 'GET_INITIAL_APP_STATE'})
}
