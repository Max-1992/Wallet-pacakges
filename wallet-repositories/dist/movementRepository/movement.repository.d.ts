import { IMovementRepository } from 'wallet-interfaces/dal/walletRepositories';
import { IMovementModel } from 'wallet-interfaces/dal/models';
export declare class MovementRepository implements IMovementRepository {
    all(): Promise<IMovementModel[]>;
    findById(id: number): Promise<IMovementModel | null>;
    save(movement: IMovementModel): Promise<void>;
    updateById(id: number, movement: IMovementModel): Promise<void>;
    deleteById(id: number): Promise<void>;
}
//# sourceMappingURL=movement.repository.d.ts.map