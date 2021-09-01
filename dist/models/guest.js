"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Guest = new Schema({
    objectId: {
        type: String
    },
    name: {
        type: String
    },
    idNumber: {
        type: Number
    },
    kind: {
        type: Number
    },
    age: {
        type: Number
    },
    dateCheckIn: {
        type: String
    },
    nights: {
        type: Number
    },
    details: {
        type: String
    },
    checkedOut: {
        type: Boolean
    },
    dateCheckOut: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Guest', Guest, 'evidencije');
//# sourceMappingURL=guest.js.map