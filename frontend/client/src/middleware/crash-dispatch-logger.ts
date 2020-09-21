import {Action, Dispatch, Middleware, Store} from 'redux'

const crashDispatchLogger: any = (store: Store) => (next: Dispatch) => (action: Action) => {
    try {
        return next(action)
    } catch (error) {
        console.error(action.type + ' - This action worked with an error')
        console.error(error)
        throw error
    }
}

export default crashDispatchLogger