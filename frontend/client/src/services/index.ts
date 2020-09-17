import PeopleService from './people-service'
import {IService} from './model'
import JsonPlaceholderService from './jsonplaceholder-service'

class Service implements IService {
    public peopleService = new PeopleService()
    public jsonPlaceholderService = new JsonPlaceholderService()
}

const service = new Service()

const getService = () => service

export default getService
