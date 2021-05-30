"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceRepository = void 0;
// Import connection database
const connection_1 = __importDefault(require("../connection"));
class BalanceRepository {
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield connection_1.default.execute(`SELECT * FROM wallet_balance ORDER BY id DESC`);
            return rows;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield connection_1.default.execute('SELECT * FROM wallet_balance WHERE id = ?', [id]);
            if (rows.length === 0)
                return null;
            return rows[0];
        });
    }
    findByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield connection_1.default.execute('SELECT * FROM wallet_balance WHERE user_id = ?', [userId]);
            if (rows.length === 0)
                return null;
            return rows[0];
        });
    }
    save(balnce) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default.execute(`INSERT INTO wallet_balance(user_id, amount, created_at) VALUES(?, ?, ?)`, [balnce.user_id, balnce.amount, balnce.created_at]);
        });
    }
    updateById(id, balance) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default.execute(`UPDATE wallet_balance SET  amount = ?, updated_at = ? WHERE id = ?`, [balance.amount, balance.updated_at, id]);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default.execute(`DELETE FROM wallet_balance WHERE id = ?`, [id]);
        });
    }
}
exports.BalanceRepository = BalanceRepository;
