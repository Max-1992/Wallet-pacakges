// Import Interface
import { ISubscriptionCreateDto, ISubscriptionUpdateDto } from '@dtos';
import { ISubscription } from '@domain';

export interface ISubscriptionCreateService {
    create(subscription: ISubscriptionCreateDto): Promise<void>
}

export interface ISubscriptionUpdateService {
    update(id: number, subscription: ISubscriptionUpdateDto): Promise<void>
}

export interface ISubscriptionGetService {
    find(id: number): Promise<ISubscription>
}

export interface ISubscriptionGetAllService {
    findAll(): Promise<ISubscription[]>
}

export interface ISubscriptionDeleteService {
    delete(id: number): Promise<void>
}