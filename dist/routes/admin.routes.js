"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("../controllers/admin.controller");
const adminRouter = express_1.default.Router();
adminRouter.route('/getAllUsers').post((req, res) => {
    new admin_controller_1.AdminController().getAllUsers(req, res);
});
adminRouter.route('/updateUser').post((req, res) => {
    new admin_controller_1.AdminController().updateUser(req, res);
});
adminRouter.route('/addNewUser').post((req, res) => {
    new admin_controller_1.AdminController().addNewUser(req, res);
});
adminRouter.route('/removeUser').post((req, res) => {
    new admin_controller_1.AdminController().removeUser(req, res);
});
exports.default = adminRouter;
//# sourceMappingURL=admin.routes.js.map