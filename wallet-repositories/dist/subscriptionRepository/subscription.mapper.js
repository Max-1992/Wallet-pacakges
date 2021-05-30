"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionMapperDB = void 0;
class SubscriptionMapperDB {
    constructor() { }
    fromCreateDtoToEntityModel(subscriptionDto) {
        const subscriptionModel = Object.assign(Object.assign({}, subscriptionDto), { created_at: new Date() });
        return subscriptionModel;
    }
    fromUpdateDtoToEntityModel(subscriptionDto) {
        const subscriptionModel = Object.assign(Object.assign({}, subscriptionDto), { updated_at: new Date() });
        return subscriptionModel;
    }
}
exports.SubscriptionMapperDB = SubscriptionMapperDB;
