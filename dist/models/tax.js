"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Tax = new Schema({
    objectId: {
        type: String
    },
    catererId: {
        type: String
    },
    guest: {
        type: JSON
    },
    price: {
        type: Number
    },
    paid: {
        type: Boolean
    },
    billInfo: {
        type: JSON
    },
});
exports.default = mongoose_1.default.model('Tax', Tax, 'takse');
//# sourceMappingURL=tax.js.map