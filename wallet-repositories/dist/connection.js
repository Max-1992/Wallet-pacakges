"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const connectDatabase = promise_1.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'virtual_wallet',
    decimalNumbers: true
});
exports.default = connectDatabase;
