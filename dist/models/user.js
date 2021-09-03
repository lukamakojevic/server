"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    type: {
        type: Number
    },
    kind: {
        type: Number
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    registeredFlag: {
        type: Boolean
    },
    details: {
        type: String
    }
});
exports.default = mongoose_1.default.model('User', User, 'korisnici');
//# sourceMappingURL=user.js.map