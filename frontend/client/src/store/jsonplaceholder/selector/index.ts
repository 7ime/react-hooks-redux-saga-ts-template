import {IAppState} from '../../app-reducer'
// import {createSelector} from 'reselect'
// import {IJsonPlaceholderState} from './state'
//
// const selectJsonPlaceholderState = (state: IAppState) => state.jsonPlaceholder
//
// export const selectTotalCountOfPosts = createSelector(
//     selectJsonPlaceholderState,
//     (state: IJsonPlaceholderState): number | null => {
//         return state.posts ? state.posts.length : null
//     }
// )



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