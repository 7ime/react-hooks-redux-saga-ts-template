import JsonPlaceholderService from './index'
import {IJsonPlaceholder} from '../../entities/jsonplaceholder.entity'

const instanceService = new JsonPlaceholderService()

describe('testing jsonPlaceholderService', () => {
    jest.setTimeout(10000)

    const jsonPlaceholderMatcher: IJsonPlaceholder.ModelDTO = {
        id: expect.anything(),
        userId: expect.anything(),
        body: expect.anything(),
        title: expect.anything()
    }

    it('testing getPosts', async() => {
        const response = await instanceService.getPosts()

        expect(response).toContainEqual(expect.objectContaining(jsonPlaceholderMatcher))
    })

    it('testing getPost', async() => {
        const response = await instanceService.getPost(1)

        expect(response).toMatchObject(jsonPlaceholderMatcher)
    })
})