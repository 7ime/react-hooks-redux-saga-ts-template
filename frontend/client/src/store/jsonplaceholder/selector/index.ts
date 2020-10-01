import {createSelector} from 'reselect'
import {IAppState} from '../../app-reducer'
import {JsonPlaceholderState} from '../index'

const selectState = (state: IAppState) => state.jsonPlaceholder

export const totalCountOfPosts = createSelector(
    selectState,
    (state: JsonPlaceholderState.IState): number | null => {
        return state.posts ? state.posts.length : null
    }
)



//
// const selectGender = (_: IAppState, gender: IGender) => gender
//
// export const selectPeopleByGender = createSelector(
//     [selectPeopleState, selectGender],
//     (state: IPeopleState, gender: IGender): IPeople.Model[] | null => {
//         if (state.list) {
//             return state.list.filter(item => item.gender === gender)
//         }
//
//         return null
//     }
// )
