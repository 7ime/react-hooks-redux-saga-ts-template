import {IJsonPlaceholder} from '../../entities/jsonplaceholder.entity'
import {IAction} from '../model'

export enum EJsonPlaceholderActions {
    GetPosts = '[JsonPlaceholder] GetPosts',
    GetPostsSuccess = '[JsonPlaceholder] GetPostsSuccess',
    GetPostsError = '[JsonPlaceholder] GetPostsError'
}

export type IJsonPlaceholderActionGetPosts = IAction<EJsonPlaceholderActions.GetPosts>

export const jsonPlaceholderActionGetPosts = (): IJsonPlaceholderActionGetPosts => ({type: EJsonPlaceholderActions.GetPosts})


export type IJsonPlaceholderActionGetPostsSuccess = IAction<EJsonPlaceholderActions.GetPostsSuccess, IJsonPlaceholder.ModelDTO[]>

export const jsonPlaceholderActionGetPostsSuccess = (payload: IJsonPlaceholder.ModelDTO[]): IJsonPlaceholderActionGetPostsSuccess => ({
    type: EJsonPlaceholderActions.GetPostsSuccess,
    payload
})

export type IJsonPlaceholderActionGetPostsError = IAction<EJsonPlaceholderActions.GetPostsError>

export const jsonPlaceholderActionGetPostsError = (): IJsonPlaceholderActionGetPostsError => ({type: EJsonPlaceholderActions.GetPostsError})

export type IJsonPlaceholderActions =
    IJsonPlaceholderActionGetPosts |
    IJsonPlaceholderActionGetPostsSuccess |
    IJsonPlaceholderActionGetPostsError

