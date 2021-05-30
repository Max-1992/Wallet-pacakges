"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementMapperDB = void 0;
class MovementMapperDB {
    constructor() { }
    fromCreateDtoToEntityModel(movementDto) {
        const balanceModel = Object.assign(Object.assign({}, movementDto), { created_at: new Date() });
        return balanceModel;
    }
    fromUpdateDtoToEntityModel(movementDto) {
        const balanceModel = Object.assign(Object.assign({}, movementDto), { updated_at: new Date() });
        return balanceModel;
    }
}
exports.MovementMapperDB = MovementMapperDB;
