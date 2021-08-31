"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let MyRequest = new Schema({
    objectId: {
        type: String
    },
    object: {
        type: JSON
    },
    stars: {
        type: Number
    },
    date: {
        type: String
    },
    dateFrom: {
        type: String
    },
    dateTo: {
        type: String
    },
    status: {
        type: String
    },
    approvedById: {
        type: String
    }
});
exports.default = mongoose_1.default.model('MyRequest', MyRequest, 'zahtevi');
//# sourceMappingURL=request.js.map