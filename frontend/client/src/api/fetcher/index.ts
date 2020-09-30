import axios, {AxiosInstance, AxiosRequestConfig} from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {IFetcher} from './model'
import Paths from '../paths'
import {IJsonPlaceholder} from '../../entities/jsonplaceholder.entity'

const mock = new MockAdapter(axios, { onNoMatch: 'passthrough' })

mock.onGet(Paths.JsonPlaceholder.getPosts()).reply<IJsonPlaceholder.ModelDTO[]>((config: AxiosRequestConfig) => {
    return [200, [
        {
            id: 1,
            title: 'John Smith2222222222',
            body: '2',
            userId: 2
        }
    ]]
})

class Fetcher implements IFetcher{
    private axios: AxiosInstance

    constructor() {
        this.axios = axios.create({
            withCredentials: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            responseType: 'json'
        })
    }

    public get = async(url: string, body: any = {}) => {
        const result = await this.axios.get(url, body)

        return result.data
    }

    public post = async(url: string, body: any = {}) => {
        const result = await this.axios.post(url, body)

        return result.data
    }

    public put = async(url: string, body: any = {}) => {
        const result = await this.axios.put(url, body)

        return result.data
    }

    public delete = async(url: string, body: any = {}) => {
        const result = await this.axios.delete(url, body)

        return result.data
    }
}

const fetcher = new Fetcher()

export default fetcher
