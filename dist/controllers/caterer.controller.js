"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatererController = void 0;
const object_1 = __importDefault(require("../models/object"));
const request_1 = __importDefault(require("../models/request"));
const user_1 = __importDefault(require("../models/user"));
const image_1 = __importDefault(require("../models/image"));
class CatererController {
    constructor() {
        this.getAllObjects = (req, res) => {
            object_1.default.find({ premissions: { $elemMatch: { $eq: req.body._id } } }, (err, objects) => {
                if (err)
                    console.log(err);
                else {
                    res.json(objects);
                }
            });
        };
        this.addNewObject = (req, res) => {
            let object = new object_1.default(req.body);
            object.save().then((ret) => {
                res.status(200).json({ "message": "", "object": ret });
            }).catch((err) => {
                res.status(400).json({ "message": "Greška pri dodavanju objekta." });
            });
        };
        this.addNewRequest = (req, res) => {
            let request = new request_1.default(req.body);
            request.save().then((ret) => {
                res.status(200).json({ "message": "" });
            }).catch((err) => {
                res.status(400).json({ "message": "Greška pri dodavanju zahteva." });
            });
        };
        this.getAllCatererUsernames = (req, res) => {
            user_1.default.find({ "type": 1 }, { "username": 1 }, {}, (err, users) => {
                if (err)
                    console.log(err);
                else {
                    res.json(users);
                }
            });
        };
        this.updateObjectName = (req, res) => {
            let id = req.body._id;
            let name = req.body.name;
            object_1.default.findOneAndUpdate({ '_id': id }, {
                "name": name
            }, {
                "useFindAndModify": false
            }, (err, objects) => {
                if (err)
                    console.log(err);
                else {
                    object_1.default.find({ '_id': id }, (err, objects) => {
                        if (err)
                            console.log(err);
                        else {
                            res.json({ message: "", content: objects });
                        }
                    });
                }
            });
        };
        this.updateObjectDetails = (req, res) => {
            let id = req.body._id;
            let details = req.body.details;
            object_1.default.findOneAndUpdate({ '_id': id }, {
                "details": details
            }, {
                "useFindAndModify": false
            }, (err, objects) => {
                if (err)
                    console.log(err);
                else {
                    object_1.default.find({ '_id': id }, (err, objects) => {
                        if (err)
                            console.log(err);
                        else {
                            res.json({ message: "", content: objects });
                        }
                    });
                }
            });
        };
        this.grantPremission = (req, res) => {
            let objectId = req.body.objectId;
            let userId = req.body.userId;
            object_1.default.findOne({ '_id': objectId }, (err, object) => {
                if (err)
                    console.log(err);
                else {
                    if (object.premissions.includes(userId)) {
                        res.json("");
                    }
                    else {
                        object_1.default.findOneAndUpdate({ '_id': objectId }, { $push: { 'premissions': userId } }, {
                            "useFindAndModify": false
                        }, (err, objects) => {
                            if (err)
                                console.log(err);
                            else {
                                res.json("");
                            }
                        });
                    }
                }
            });
        };
        this.getObjectImages = (req, res) => {
            let objectId = req.body.objectId;
            image_1.default.find({ "objectId": objectId }, { "content": 1 }, {}, (err, images) => {
                if (err)
                    console.log(err);
                else {
                    res.json(images);
                }
            });
        };
        this.addNewImage = (req, res) => {
            let image = new image_1.default(req.body);
            image.save().then((ret) => {
                res.status(200).json({ "message": "", "object": ret });
            }).catch((err) => {
                res.status(400).json({ "message": "Greška pri dodavanju fotografije." });
            });
        };
        this.deleteImage = (req, res) => {
            let id = req.body.id;
            let objectId = req.body.objectId;
            image_1.default.deleteOne({ "_id": id }).then((ret) => {
                image_1.default.find({ "objectId": objectId }, (err, images) => {
                    if (err)
                        console.log(err);
                    else {
                        res.json(images);
                    }
                });
            });
        };
        this.deleteObject = (req, res) => {
            let id = req.body.id;
            request_1.default.deleteMany({ "objectId": id }).then((ret) => {
                object_1.default.deleteOne({ "_id": id }).then((ret) => {
                    res.status(200).json("");
                }).catch((err) => {
                    res.status(400).json("");
                });
            }).catch((err) => {
                res.status(400).json("");
            });
        };
    }
}
exports.CatererController = CatererController;
//# sourceMappingURL=caterer.controller.js.map