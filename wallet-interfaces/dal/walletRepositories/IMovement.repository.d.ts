import { IMovementModel } from '@dal/models';
export interface IMovementRepository {
    all(): Promise<IMovementModel[]>;
    findById(id: number): Promise<IMovementModel | null>;
    save(movement: IMovementModel): Promise<void>;
    updateById(id: number, movement: IMovementModel): Promise<void>;
    deleteById(id: number): Promise<void>;
}
//# sourceMappingURL=IMovement.repository.d.ts.map