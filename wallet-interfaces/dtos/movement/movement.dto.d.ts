import { MovementType } from '@enums';
export interface IMovementCreateDto {
    user_id: number;
    type: MovementType;
    amount: number;
}
export interface IMovementUpdateDto {
    type: MovementType;
    amount: number;
}
//# sourceMappingURL=movement.dto.d.ts.map