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
exports.MovementRepository = void 0;
// Import connection database
const connection_1 = __importDefault(require("../connection"));
class MovementRepository {
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield connection_1.default.execute(`SELECT * FROM wallet_movement ORDER BY id DESC`);
            return rows;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield connection_1.default.execute('SELECT * FROM wallet_movement WHERE id = ?', [id]);
            if (rows.length === 0)
                return null;
            return rows[0];
        });
    }
    save(movement) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default.execute(`INSERT INTO wallet_movement(user_id, type, amount, created_at) VALUES(?, ?, ?, ?)`, [movement.user_id, movement.type, movement.amount, movement.created_at]);
        });
    }
    updateById(id, movement) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default.execute(`UPDATE wallet_movement SET  amount = ?, type = ?, updated_at = ? WHERE id = ?`, [movement.amount, movement.type, movement.updated_at, id]);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default.execute(`DELETE FROM wallet_movemente WHERE id = ?`, [id]);
        });
    }
}
exports.MovementRepository = MovementRepository;
