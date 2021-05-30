import { IMovementModel } from 'wallet-interfaces/dal/models';
import { IMovementMapperDB } from 'wallet-interfaces/dal/mappers';
import { IMovementCreateDto, IMovementUpdateDto } from 'wallet-interfaces/dtos';

export class MovementMapperDB implements IMovementMapperDB {

    constructor() {}

    fromCreateDtoToEntityModel(movementDto: IMovementCreateDto): IMovementModel  {
        const balanceModel = { ...movementDto, created_at: new Date() };
        return balanceModel as IMovementModel
    }

    fromUpdateDtoToEntityModel(movementDto: IMovementUpdateDto): IMovementModel  {
        const balanceModel = { ...movementDto, updated_at: new Date() };
        return balanceModel as IMovementModel
    }

}

