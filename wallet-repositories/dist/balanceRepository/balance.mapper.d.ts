import { IBalanceModel } from 'wallet-interfaces/dal/models';
import { IBalanceMapperDB } from 'wallet-interfaces/dal/mappers';
import { IBalanceCreateDto, IBalanceUpdateDto } from 'wallet-interfaces/dtos';
export declare class BalanceMapperDB implements IBalanceMapperDB {
    constructor();
    fromCreateDtoToEntityModel(balanceDto: IBalanceCreateDto): IBalanceModel;
    fromUpdateDtoToEntityModel(balanceDto: IBalanceUpdateDto): IBalanceModel;
}
//# sourceMappingURL=balance.mapper.d.ts.map