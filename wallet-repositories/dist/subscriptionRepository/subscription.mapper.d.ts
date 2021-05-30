import { ISubscriptionModel } from 'wallet-interfaces/dal/models';
import { ISubscriptionMapperDB } from 'wallet-interfaces/dal/mappers';
import { ISubscriptionUpdateDto, ISubscriptionCreateDto } from 'wallet-interfaces/dtos';
export declare class SubscriptionMapperDB implements ISubscriptionMapperDB {
    constructor();
    fromCreateDtoToEntityModel(subscriptionDto: ISubscriptionCreateDto): ISubscriptionModel;
    fromUpdateDtoToEntityModel(subscriptionDto: ISubscriptionUpdateDto): ISubscriptionModel;
}
//# sourceMappingURL=subscription.mapper.d.ts.map