// Import interface
import { ISubscriptionCreateDto, ISubscriptionUpdateDto } from "@dtos";
import { ISubscriptionModel } from "@dal/models";

export interface ISubscriptionMapperDB {
    fromCreateDtoToEntityModel(subscriptionDto: ISubscriptionCreateDto): ISubscriptionModel
    fromUpdateDtoToEntityModel(subscriptionDto: ISubscriptionUpdateDto): ISubscriptionModel
}