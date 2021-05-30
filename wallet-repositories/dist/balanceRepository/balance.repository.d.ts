import { IBalanceRepository } from 'wallet-interfaces/dal/walletRepositories';
import { IBalanceModel } from 'wallet-interfaces/dal/models';
export declare class BalanceRepository implements IBalanceRepository {
    all(): Promise<IBalanceModel[]>;
    findById(id: number): Promise<IBalanceModel | null>;
    findByUserId(userId: number): Promise<IBalanceModel | null>;
    save(balnce: IBalanceModel): Promise<void>;
    updateById(id: number, balance: IBalanceModel): Promise<void>;
    deleteById(id: number): Promise<void>;
}
//# sourceMappingURL=balance.repository.d.ts.map