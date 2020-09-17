import {IPeopleService} from './people-service/model'
import {IJsonPlaceholderService} from './jsonplaceholder-service/model'

export interface IService {
    peopleService: IPeopleService
    jsonPlaceholderService: IJsonPlaceholderService
}
