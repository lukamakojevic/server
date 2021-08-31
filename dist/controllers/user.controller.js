"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = __importDefault(require("../models/user"));
class UserController {
    constructor() {
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            user_1.default.findOne({ 'username': username }, (err, user) => {
                if (err)
                    console.log(err);
                else if (user) {
                    user_1.default.findOne({ 'username': username, 'password': password }, (err, user) => {
                        if (err)
                            console.log(err);
                        else if (user) {
                            res.json(user);
                        }
                        else {
                            res.json("Pogrešna lozinka.");
                        }
                    });
                }
                else {
                    res.json("Korisnik ne postoji.");
                }
            });
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map