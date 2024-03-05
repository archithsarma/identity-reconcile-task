"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const main_controller_1 = require("../controller/main.controller");
exports.router = (0, express_1.Router)();
exports.router.get('/start', main_controller_1.initiliazeServer);
//# sourceMappingURL=default.routes.js.map