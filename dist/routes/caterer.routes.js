"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const caterer_controller_1 = require("../controllers/caterer.controller");
const catererRouter = express_1.default.Router();
catererRouter.route('/getAllObjects').post((req, res) => {
    new caterer_controller_1.CatererController().getAllObjects(req, res);
});
catererRouter.route('/addNewObject').post((req, res) => {
    new caterer_controller_1.CatererController().addNewObject(req, res);
});
catererRouter.route('/addNewRequest').post((req, res) => {
    new caterer_controller_1.CatererController().addNewRequest(req, res);
});
catererRouter.route('/getAllCatererUsernames').post((req, res) => {
    new caterer_controller_1.CatererController().getAllCatererUsernames(req, res);
});
catererRouter.route('/updateObjectName').post((req, res) => {
    new caterer_controller_1.CatererController().updateObjectName(req, res);
});
catererRouter.route('/updateObjectDetails').post((req, res) => {
    new caterer_controller_1.CatererController().updateObjectDetails(req, res);
});
catererRouter.route('/updateObjectAddress').post((req, res) => {
    new caterer_controller_1.CatererController().updateObjectAddress(req, res);
});
catererRouter.route('/grantPremission').post((req, res) => {
    new caterer_controller_1.CatererController().grantPremission(req, res);
});
catererRouter.route('/getObjectImages').post((req, res) => {
    new caterer_controller_1.CatererController().getObjectImages(req, res);
});
catererRouter.route('/addNewImage').post((req, res) => {
    new caterer_controller_1.CatererController().addNewImage(req, res);
});
catererRouter.route('/deleteImage').post((req, res) => {
    new caterer_controller_1.CatererController().deleteImage(req, res);
});
catererRouter.route('/deleteObject').post((req, res) => {
    new caterer_controller_1.CatererController().deleteObject(req, res);
});
catererRouter.route('/addNewGuest').post((req, res) => {
    new caterer_controller_1.CatererController().addNewGuest(req, res);
});
catererRouter.route('/getAllGuests').post((req, res) => {
    new caterer_controller_1.CatererController().getAllGuests(req, res);
});
catererRouter.route('/updateGuest').post((req, res) => {
    new caterer_controller_1.CatererController().updateGuest(req, res);
});
catererRouter.route('/removeGuest').post((req, res) => {
    new caterer_controller_1.CatererController().removeGuest(req, res);
});
catererRouter.route('/getAllTaxes').post((req, res) => {
    new caterer_controller_1.CatererController().getAllTaxes(req, res);
});
catererRouter.route('/payTax').post((req, res) => {
    new caterer_controller_1.CatererController().payTax(req, res);
});
exports.default = catererRouter;
//# sourceMappingURL=caterer.routes.js.map