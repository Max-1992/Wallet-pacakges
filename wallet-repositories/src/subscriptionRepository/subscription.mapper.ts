import { ISubscriptionModel } from 'wallet-interfaces/dal/models';
import { ISubscriptionMapperDB } from 'wallet-interfaces/dal/mappers';
import { ISubscriptionUpdateDto, ISubscriptionCreateDto } from 'wallet-interfaces/dtos';

export class SubscriptionMapperDB implements ISubscriptionMapperDB {

    constructor() {}

    fromCreateDtoToEntityModel(subscriptionDto: ISubscriptionCreateDto): ISubscriptionModel  {
        const subscriptionModel = { ...subscriptionDto, created_at: new Date() };
        return subscriptionModel as ISubscriptionModel
    }

    fromUpdateDtoToEntityModel(subscriptionDto: ISubscriptionUpdateDto): ISubscriptionModel  {
        const subscriptionModel = { ...subscriptionDto, updated_at: new Date() };
        return subscriptionModel as ISubscriptionModel
    }

}