"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabaseConnection = exports.connectToDatabase = void 0;
const mysql2_1 = require("mysql2");
const logger_utils_1 = __importStar(require("../utils/logger.utils"));
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;
let pool;
const connectToDatabase = () => {
    const options = {
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DATABASE,
    };
    pool = (0, mysql2_1.createPool)(options);
    pool.getConnection((err, connection) => {
        if (err) {
            // Log an error message if the connection to MySQL fails
            (0, logger_utils_1.default)(`Failed to connect to MySQL: ${err}`, logger_utils_1.LogTypes.ERROR_LOG);
            throw err;
        }
        console.log("Connected to MySQL server");
        // Log a message when successfully connected to MySQL
        (0, logger_utils_1.default)('Connected to MySQL', logger_utils_1.LogTypes.INFO);
        // Release the connection
        connection.release();
    });
};
exports.connectToDatabase = connectToDatabase;
const getDatabaseConnection = () => {
    if (!pool) {
        throw new Error('Database connection not established');
    }
    return pool;
};
exports.getDatabaseConnection = getDatabaseConnection;
//# sourceMappingURL=mysql.js.map