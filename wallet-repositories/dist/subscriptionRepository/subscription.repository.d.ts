import { ISubscriptionRepository } from 'wallet-interfaces/dal/walletRepositories';
import { ISubscriptionModel } from 'wallet-interfaces/dal/models';
export declare class SubscriptionRepository implements ISubscriptionRepository {
    all(): Promise<ISubscriptionModel[]>;
    findById(id: number): Promise<ISubscriptionModel | null>;
    findByUserAndCode(user_id: number, code: string): Promise<ISubscriptionModel | null>;
    save(subscriptor: ISubscriptionModel): Promise<void>;
    updateById(id: number, subscriptor: ISubscriptionModel): Promise<void>;
    deleteById(id: number): Promise<void>;
}
//# sourceMappingURL=subscription.repository.d.ts.map