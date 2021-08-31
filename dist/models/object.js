"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let MyObject = new Schema({
    name: {
        type: String
    },
    type: {
        type: Number
    },
    owner: {
        type: String
    },
    premissions: {
        type: Array
    },
    stars: {
        type: Number
    },
    details: {
        type: String
    },
    categoryId: {
        type: String
    }
});
exports.default = mongoose_1.default.model('MyObject', MyObject, 'objekti');
//# sourceMappingURL=object.js.map