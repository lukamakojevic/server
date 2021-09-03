"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const worker_controller_1 = require("../controllers/worker.controller");
const workerRouter = express_1.default.Router();
workerRouter.route('/getAllCaterers').post((req, res) => {
    new worker_controller_1.WorkerController().getAllCaterers(req, res);
});
workerRouter.route('/getAllRequests').post((req, res) => {
    new worker_controller_1.WorkerController().getAllRequests(req, res);
});
workerRouter.route('/acceptRequest').post((req, res) => {
    new worker_controller_1.WorkerController().acceptRequest(req, res);
});
workerRouter.route('/declineRequest').post((req, res) => {
    new worker_controller_1.WorkerController().declineRequest(req, res);
});
workerRouter.route('/getAllUnpaiedTaxes').post((req, res) => {
    new worker_controller_1.WorkerController().getAllUnpaiedTaxes(req, res);
});
exports.default = workerRouter;
//# sourceMappingURL=worker.routes.js.map