"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initiliazeServer = void 0;
const initiliazeServer = (req, res) => {
    try {
        res.status(200).send({ message: 'hello word' });
    }
    catch (err) {
        res.status(500).send({ success: false, err });
    }
};
exports.initiliazeServer = initiliazeServer;
//# sourceMappingURL=main.controller.js.map