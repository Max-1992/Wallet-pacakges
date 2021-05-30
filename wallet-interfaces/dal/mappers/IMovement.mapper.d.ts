import { IMovementCreateDto, IMovementUpdateDto } from "@dtos";
import { IMovementModel } from "@dal/models";
export interface IMovementMapperDB {
    fromCreateDtoToEntityModel(movementDto: IMovementCreateDto): IMovementModel;
    fromUpdateDtoToEntityModel(movementDto: IMovementUpdateDto): IMovementModel;
}
//# sourceMappingURL=IMovement.mapper.d.ts.map