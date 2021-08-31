"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerController = void 0;
const user_1 = __importDefault(require("../models/user"));
const request_1 = __importDefault(require("../models/request"));
const object_1 = __importDefault(require("../models/object"));
class WorkerController {
    constructor() {
        this.getAllCaterers = (req, res) => {
            user_1.default.find({ "type": 1 }, (err, users) => {
                if (err)
                    console.log(err);
                else {
                    res.json(users);
                }
            });
        };
        this.getAllRequests = (req, res) => {
            request_1.default.find({ "status": "none" }, (err, requests) => {
                if (err)
                    console.log(err);
                else {
                    res.json(requests);
                }
            });
        };
        this.acceptRequest = (req, res) => {
            let idRequest = req.body.content._id;
            let idObject = req.body.content.objectId;
            let stars = req.body.content.stars;
            let approvedById = req.body.approvedById;
            object_1.default.findOneAndUpdate({ '_id': idObject }, {
                "stars": stars,
                "categoryId": idRequest
            }, {
                "useFindAndModify": false
            }, (err, users) => {
                if (err)
                    console.log(err);
                else {
                    request_1.default.findOneAndUpdate({ '_id': idRequest }, {
                        "status": "approved",
                        "approvedById": approvedById
                    }, {
                        "useFindAndModify": false
                    }, (err, users) => {
                        if (err)
                            console.log(err);
                        else {
                            res.json(users);
                        }
                    });
                }
            });
        };
        this.declineRequest = (req, res) => {
            let idRequest = req.body.id;
            let approvedById = req.body.approvedById;
            request_1.default.findOneAndUpdate({ '_id': idRequest }, {
                "status": "declined",
                "approvedById": approvedById
            }, {
                "useFindAndModify": false
            }, (err, req) => {
                if (err)
                    console.log(err);
                else {
                    res.json(req);
                }
            });
        };
    }
}
exports.WorkerController = WorkerController;
//# sourceMappingURL=worker.controller.js.map