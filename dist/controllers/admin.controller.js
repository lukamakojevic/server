"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const user_1 = __importDefault(require("../models/user"));
class AdminController {
    constructor() {
        this.getAllUsers = (req, res) => {
            user_1.default.find({}, (err, users) => {
                if (err)
                    console.log(err);
                else {
                    res.json(users);
                }
            });
        };
        this.updateUser = (req, res) => {
            let id = req.body._id;
            user_1.default.findOneAndUpdate({ '_id': id }, {
                "username": req.body.username,
                "password": req.body.password,
                "type": req.body.type,
                "kind": req.body.kind,
                "registeredFlag": req.body.registeredFlag,
                "name": req.body.name,
                "details": req.body.details
            }, {
                "useFindAndModify": false
            }, (err, users) => {
                if (err)
                    console.log(err);
                else {
                    user_1.default.find({}, (err, users) => {
                        if (err)
                            console.log(err);
                        else {
                            res.json(users);
                        }
                    });
                }
            });
        };
        this.addNewUser = (req, res) => {
            let username = req.body.username;
            user_1.default.find({ "username": username }, (err, users) => {
                if (err)
                    console.log(err);
                else if (JSON.stringify(users) != "[]") {
                    res.json('Korisnik sa unetim korisničkim imenom već postoji.');
                }
                else {
                    let user = new user_1.default(req.body);
                    user.save().then((ret) => {
                        res.status(200).json("");
                    }).catch((err) => {
                        res.status(400).json(err);
                    });
                }
            });
        };
        this.removeUser = (req, res) => {
            let id = req.body._id;
            user_1.default.deleteOne({ "_id": id }).then((ret) => {
                user_1.default.find({}, (err, users) => {
                    if (err)
                        console.log(err);
                    else {
                        res.json(users);
                    }
                });
            });
        };
    }
}
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map