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
const guest_1 = __importDefault(require("../models/guest"));
const tax_1 = __importDefault(require("../models/tax"));
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
        this.updateObjectAddress = (req, res) => {
            let id = req.body._id;
            let address = req.body.address;
            object_1.default.findOneAndUpdate({ '_id': id }, {
                "address": address
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
        this.addNewGuest = (req, res) => {
            let guest = new guest_1.default(req.body);
            guest.save().then((ret) => {
                res.status(200).json({ "message": "", "object": ret });
            }).catch((err) => {
                res.status(400).json({ "message": "Greška pri prijavi gosta." });
            });
        };
        this.getAllGuests = (req, res) => {
            let objectId = req.body.id;
            guest_1.default.find({ "objectId": objectId }, (err, guests) => {
                if (err)
                    console.log(err);
                else {
                    res.json(guests);
                }
            });
        };
        this.updateGuest = (req, res) => {
            let id = req.body._id;
            let objectId = req.body.objectId;
            let checkedOut = req.body.checkedOut;
            let body = req.body;
            guest_1.default.findOneAndUpdate({ '_id': id }, {
                "name": req.body.name,
                "idNumber": req.body.idNumber,
                "details": req.body.details,
                "kind": req.body.kind,
                "age": req.body.age,
                "dateCheckIn": req.body.dateCheckIn,
                "nights": req.body.nights,
                "dateCheckOut": req.body.dateCheckOut,
                "checkedOut": req.body.checkedOut
            }, {
                "useFindAndModify": false
            }, (err, guests) => {
                if (err)
                    console.log(err);
                else {
                    if (checkedOut) {
                        object_1.default.findOne({ '_id': objectId }, (err, object) => {
                            if (err)
                                console.log(err);
                            else {
                                let catererId = object.owner;
                                let price;
                                if (body.nights < 30) {
                                    if (body.age < 7) {
                                        price = 0;
                                    }
                                    else if (body.age >= 7 && body.age < 15) {
                                        price = body.nights * 79;
                                    }
                                    else {
                                        price = body.nights * 159;
                                    }
                                }
                                else {
                                    price = 0;
                                }
                                const taxData = {
                                    'objectId': objectId,
                                    'catererId': catererId,
                                    'guest': body,
                                    'price': price,
                                    'paid': false
                                };
                                let tax = new tax_1.default(taxData);
                                tax.save().then((ret) => {
                                    guest_1.default.find({ "objectId": objectId }, (err, guests) => {
                                        if (err)
                                            console.log(err);
                                        else {
                                            res.json(guests);
                                        }
                                    });
                                }).catch((err) => {
                                    res.status(400).json({ "message": "Greška pri obračunu takse." });
                                });
                            }
                        });
                    }
                    else {
                        guest_1.default.find({ "objectId": objectId }, (err, guests) => {
                            if (err)
                                console.log(err);
                            else {
                                res.json(guests);
                            }
                        });
                    }
                }
            });
        };
        this.removeGuest = (req, res) => {
            let id = req.body._id;
            let objectId = req.body.objectId;
            guest_1.default.deleteOne({ "_id": id }).then((ret) => {
                guest_1.default.find({ "objectId": objectId }, (err, guests) => {
                    if (err)
                        console.log(err);
                    else {
                        res.json(guests);
                    }
                });
            });
        };
        this.getAllTaxes = (req, res) => {
            let objectId = req.body.objectId;
            tax_1.default.find({ "objectId": objectId }, (err, taxes) => {
                if (err)
                    console.log(err);
                else {
                    res.json(taxes);
                }
            });
        };
        this.payTax = (req, res) => {
            let taxId = req.body.taxId;
            let bill = req.body.bill;
            tax_1.default.findOneAndUpdate({ '_id': taxId }, {
                "paid": true,
                "billInfo": bill
            }, {
                "useFindAndModify": false
            }, (err, tax) => {
                if (err)
                    console.log(err);
                else {
                    let objectId = tax.objectId;
                    tax_1.default.find({ "objectId": objectId }, (err, taxes) => {
                        if (err)
                            console.log(err);
                        else {
                            res.json(taxes);
                        }
                    });
                }
            });
        };
    }
}
exports.CatererController = CatererController;
//# sourceMappingURL=caterer.controller.js.map