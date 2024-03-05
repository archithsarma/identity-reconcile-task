"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogTypes = void 0;
const pino_1 = require("pino");
const init = () => (0, pino_1.pino)();
var LogTypes;
(function (LogTypes) {
    LogTypes["INFO"] = "info";
    LogTypes["WARNING"] = "warning";
    LogTypes["ERROR_LOG"] = "error_logs";
})(LogTypes || (exports.LogTypes = LogTypes = {}));
const loadLogStructFromEnv = (logEnv) => {
    const { INFO, ERROR_LOG, WARNING } = LogTypes;
    let obj = {};
    const { INFO_LOGS, WARNING_LOGS, ERROR_LOGS } = process.env;
    switch (logEnv) {
        case INFO:
            obj = JSON.parse(INFO_LOGS);
            break;
        case ERROR_LOG:
            obj = JSON.parse(WARNING_LOGS);
            break;
        case WARNING:
            obj = JSON.parse(ERROR_LOGS);
            break;
    }
    return obj;
};
const infoLogs = (msg, func) => {
    const logObj = loadLogStructFromEnv(func);
    return init().info(msg);
};
exports.default = infoLogs;
//# sourceMappingURL=logger.utils.js.map