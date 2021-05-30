import { IBalanceCreateDto, IBalanceUpdateDto } from '@dtos';
import { IBalance } from '@domain';
export interface IBalanceGetAllService {
    findAll(): Promise<IBalance[]>;
}
export interface IBalanceGetService {
    find(id: number): Promise<IBalance>;
}
export interface IBalanceCreateService {
    create(balance: IBalanceCreateDto): Promise<void>;
}
export interface IBalanceUpdateService {
    update(id: number, balance: IBalanceUpdateDto): Promise<void>;
}
export interface IBalanceDeleteService {
    delete(id: number): Promise<void>;
}
//# sourceMappingURL=IBalance.services.d.ts.map