import { IMovementModel } from 'wallet-interfaces/dal/models';
import { IMovementMapperDB } from 'wallet-interfaces/dal/mappers';
import { IMovementCreateDto, IMovementUpdateDto } from 'wallet-interfaces/dtos';
export declare class MovementMapperDB implements IMovementMapperDB {
    constructor();
    fromCreateDtoToEntityModel(movementDto: IMovementCreateDto): IMovementModel;
    fromUpdateDtoToEntityModel(movementDto: IMovementUpdateDto): IMovementModel;
}
//# sourceMappingURL=movement.mapper.d.ts.map