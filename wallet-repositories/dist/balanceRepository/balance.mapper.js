"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceMapperDB = void 0;
class BalanceMapperDB {
    constructor() { }
    fromCreateDtoToEntityModel(balanceDto) {
        const balanceModel = Object.assign(Object.assign({}, balanceDto), { created_at: new Date() });
        return balanceModel;
    }
    fromUpdateDtoToEntityModel(balanceDto) {
        const balanceModel = Object.assign(Object.assign({}, balanceDto), { updated_at: new Date() });
        return balanceModel;
    }
}
exports.BalanceMapperDB = BalanceMapperDB;
