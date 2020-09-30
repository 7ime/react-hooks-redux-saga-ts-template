import {IJsonPlaceholder} from '../../entities/jsonplaceholder.entity'
import {IAction} from '../model'

export enum EJsonPlaceholderActions {
    GetPosts = '[JsonPlaceholder] GetPosts',
    GetPostsSuccess = '[JsonPlaceholder] GetPostsSuccess',
    GetPostsError = '[JsonPlaceholder] GetPostsError',
    GetPost = '[JsonPlaceholder] GetPost',
    GetPostSuccess = '[JsonPlaceholder] GetPostSuccess',
    ResetState = '[JsonPlaceholder] ResetState'
}

export type IJsonPlaceholderActionGetPosts = IAction<EJsonPlaceholderActions.GetPosts>

export const jsonPlaceholderActionGetPosts = (): IJsonPlaceholderActionGetPosts => {
    return {
        type: EJsonPlaceholderActions.GetPosts
    }
}

export type IJsonPlaceholderActionGetPostsSuccess = IAction<EJsonPlaceholderActions.GetPostsSuccess, IJsonPlaceholder.ModelDTO[]>

export const jsonPlaceholderActionGetPostsSuccess = (payload: IJsonPlaceholder.ModelDTO[]): IJsonPlaceholderActionGetPostsSuccess => {
    return {
        type: EJsonPlaceholderActions.GetPostsSuccess,
        payload
    }
}

export type IJsonPlaceholderActionGetPostsError = IAction<EJsonPlaceholderActions.GetPostsError>

export const jsonPlaceholderActionGetPostsError = (): IJsonPlaceholderActionGetPostsError => {
    return {
        type: EJsonPlaceholderActions.GetPostsError
    }
}

export type IJsonPlaceholderActionGetPost = IAction<EJsonPlaceholderActions.GetPost, number>

export const jsonPlaceholderActionGetPost = (payload: number): IJsonPlaceholderActionGetPost => {
    return {
        type: EJsonPlaceholderActions.GetPost,
        payload
    }
}

export type IJsonPlaceholderActionGetPostSuccess = IAction<EJsonPlaceholderActions.GetPostSuccess, IJsonPlaceholder.Model>

export const jsonPlaceholderActionGetPostSuccess = (payload: IJsonPlaceholder.Model): IJsonPlaceholderActionGetPostSuccess => {
    return {
        type: EJsonPlaceholderActions.GetPostSuccess,
        payload
    }
}

export type IJsonPlaceholderActionResetState = IAction<EJsonPlaceholderActions.ResetState>

export const jsonPlaceholderActionGetResetState = (): IJsonPlaceholderActionResetState => {
    return {
        type: EJsonPlaceholderActions.ResetState
    }
}

export type IJsonPlaceholderActions =
    IJsonPlaceholderActionGetPosts |
    IJsonPlaceholderActionGetPostsSuccess |
    IJsonPlaceholderActionGetPostsError |
    IJsonPlaceholderActionGetPost |
    IJsonPlaceholderActionGetPostSuccess |
    IJsonPlaceholderActionResetState
