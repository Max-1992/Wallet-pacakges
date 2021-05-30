import { IBalanceModel } from 'wallet-interfaces/dal/models';
import { IBalanceMapperDB } from 'wallet-interfaces/dal/mappers';
import { IBalanceCreateDto, IBalanceUpdateDto } from 'wallet-interfaces/dtos';

export class BalanceMapperDB implements IBalanceMapperDB {

    constructor() {}

    fromCreateDtoToEntityModel(balanceDto: IBalanceCreateDto): IBalanceModel  {
        const balanceModel = { ...balanceDto, created_at: new Date() };
        return balanceModel as IBalanceModel
    }

    fromUpdateDtoToEntityModel(balanceDto: IBalanceUpdateDto): IBalanceModel  {
        const balanceModel = { ...balanceDto, updated_at: new Date() };
        return balanceModel as IBalanceModel
    }

}