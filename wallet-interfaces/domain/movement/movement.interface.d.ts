import { MovementType } from '@enums';
export interface IMovement {
    id: number;
    user_id: number;
    type: MovementType;
    amount: number;
    created_at?: Date;
    updated_at?: Date;
}
//# sourceMappingURL=movement.interface.d.ts.map