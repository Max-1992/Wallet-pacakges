import { IBalanceCreateDto, IBalanceUpdateDto } from "@dtos";
import { IBalanceModel } from '@dal/models';
export interface IBalanceMapperDB {
    fromCreateDtoToEntityModel(balanceDto: IBalanceCreateDto): IBalanceModel;
    fromUpdateDtoToEntityModel(balanceDto: IBalanceUpdateDto): IBalanceModel;
}
//# sourceMappingURL=IBalance.mapper.d.ts.map