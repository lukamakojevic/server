import express from 'express';
import MyObject from '../models/object';
import MyRequest from '../models/request';
import User from '../models/user';
import Image from '../models/image';
import Guest from '../models/guest';
import Tax from '../models/tax';

export class CatererController{
    getAllObjects = (req: express.Request, res: express.Response)=>{

       MyObject.find({ premissions: {$elemMatch:  { $eq: req.body._id} } },
            (err, objects)=>{
                if(err) console.log(err);
                else {
                    res.json(objects);                      
                }
        });

    }

    addNewObject = (req: express.Request, res: express.Response)=>{
        
        let object = new MyObject(req.body);
        
        object.save().then((ret)=>{
            res.status(200).json({ "message": "" , "object":ret});
        }).catch((err)=>{
            res.status(400).json({ "message": "Greška pri dodavanju objekta."});
        })

    }

    addNewRequest = (req: express.Request, res: express.Response)=>{

        let request = new MyRequest(req.body);

        request.save().then((ret)=>{

            res.status(200).json({ "message": ""});

        }).catch((err)=>{

            res.status(400).json({ "message": "Greška pri dodavanju zahteva."});

        })
    } 

    getAllCatererUsernames  = (req: express.Request, res: express.Response)=>{
        
        User.find({ "type" : 1}, {"username" : 1 } , { },
            (err, users)=>{
                if(err) console.log(err);
                else {
                    res.json(users);                      
                }
        })
    }

    updateObjectName = (req: express.Request, res: express.Response)=>{

        let id = req.body._id;
        let name = req.body.name;

        MyObject.findOneAndUpdate({'_id':id},{
                "name" : name 
            }            
            ,{
                "useFindAndModify" : false
            } , (err , objects ) => {

                if(err) console.log(err);
                else{
                    MyObject.find({'_id':id}, (err, objects)=>{
                                if(err) console.log(err);
                                else {
                                    res.json({message : "", content: objects});                      
                                }
                        })
                }
            }
        );          
    }

    updateObjectDetails = (req: express.Request, res: express.Response)=>{

        let id = req.body._id;
        let details = req.body.details;

        MyObject.findOneAndUpdate({'_id':id},{
                "details" : details
            }            
            ,{
                "useFindAndModify" : false
            } , (err , objects ) => {

                if(err) console.log(err);
                else{
                    MyObject.find({'_id':id}, (err, objects)=>{
                                if(err) console.log(err);
                                else {
                                    res.json({message : "", content: objects});                      
                                }
                        })
                }
            }
        );          
    }

    updateObjectAddress = (req: express.Request, res: express.Response)=>{

        let id = req.body._id;
        let address = req.body.address;

        MyObject.findOneAndUpdate({'_id':id},{
                "address" : address
            }            
            ,{
                "useFindAndModify" : false
            } , (err , objects ) => {

                if(err) console.log(err);
                else{
                    MyObject.find({'_id':id}, (err, objects)=>{
                                if(err) console.log(err);
                                else {
                                    res.json({message : "", content: objects});                      
                                }
                        })
                }
            }
        );          
    }


    grantPremission = (req: express.Request, res: express.Response)=>{

        let objectId = req.body.objectId;
        let userId = req.body.userId;

        MyObject.findOne({'_id':objectId} , (err , object) => {
            if(err) console.log(err);
            else{
                if(object.premissions.includes(userId)){
                    res.json(""); 
                }else{
                    MyObject.findOneAndUpdate({'_id':objectId}, {$push: {'premissions':userId}} ,{
                        "useFindAndModify" : false
                    } , (err , objects) => {
                            if(err) console.log(err);
                            else{
                                res.json(""); 
                            }
                        }
                    );
                }
            }
        }

        );        
    } 

    getObjectImages = (req: express.Request, res: express.Response)=>{

        let objectId = req.body.objectId;
        
        Image.find({ "objectId" : objectId}, {"content" : 1 } , { },
            (err, images)=>{
                if(err) console.log(err);
                else {
                    res.json(images);                      
                }
        })
    } 


    addNewImage = (req: express.Request, res: express.Response)=>{

        let image = new Image(req.body);

        image.save().then((ret)=>{
            res.status(200).json({ "message": "" , "object":ret});
        }).catch((err)=>{
            res.status(400).json({ "message": "Greška pri dodavanju fotografije."});
        })
    } 


    deleteImage = (req: express.Request, res: express.Response)=>{
        let id = req.body.id;
        let objectId = req.body.objectId;

        Image.deleteOne({ "_id" : id} ).then((ret) => {
            Image.find({ "objectId" : objectId},
                (err, images)=>{
                    if(err) console.log(err);
                    else {
                        res.json(images);                      
                    }
            })
        } )       
        
    }

    deleteObject = (req: express.Request, res: express.Response)=>{
        let id = req.body.id;

        MyRequest.deleteMany({ "objectId" : id}).then((ret)=>{
            MyObject.deleteOne({ "_id" : id} ).then((ret)=>{
                res.status(200).json("");
            }).catch((err)=>{
                res.status(400).json("");
            })
        }).catch((err)=>{
            res.status(400).json("");
        })        
    }

    addNewGuest = (req: express.Request, res: express.Response)=>{

        let guest = new Guest(req.body);

        guest.save().then((ret)=>{
            res.status(200).json({ "message": "" , "object":ret});
        }).catch((err)=>{
            res.status(400).json({ "message": "Greška pri prijavi gosta."});
        })
    }

    getAllGuests = (req: express.Request, res: express.Response)=>{

        let objectId = req.body.id;
        
        Guest.find({ "objectId" : objectId},
            (err, guests)=>{
                if(err) console.log(err);
                else {
                    res.json(guests);                      
                }
        })
    } 

    updateGuest = (req: express.Request, res: express.Response)=>{

        let id = req.body._id;
        let objectId = req.body.objectId;
        let checkedOut = req.body.checkedOut;

        let body = req.body;

        Guest.findOneAndUpdate({'_id':id},{
                "name" : req.body.name,
                "idNumber" : req.body.idNumber,
                "details" : req.body.details,
                "kind" : req.body.kind,
                "age" : req.body.age,
                "dateCheckIn" : req.body.dateCheckIn ,
                "nights" : req.body.nights,
                "dateCheckOut" : req.body.dateCheckOut,
                "checkedOut" : req.body.checkedOut
            }            
            ,{
                "useFindAndModify" : false
            } , (err , guests ) => {

                if(err) console.log(err);
                else{

                    if(checkedOut){
                        MyObject.findOne({'_id':objectId} , (err , object) => {
                            if(err) console.log(err);
                            else{
                                let catererId = object.owner;
                                let price;

                                if(body.nights < 30){
                                    if(body.age < 7){
                                        price = 0;
                                    }else if( body.age >= 7 && body.age < 15){
                                        price = body.nights * 79;
                                    }else{
                                        price = body.nights * 159;
                                    }
                                }else{
                                    price = 0;
                                }                     

                                const taxData = {   
                                                    'objectId': objectId,
                                                    'catererId': catererId,
                                                    'guest': body,
                                                    'price': price,
                                                    'paid': false
                                                }
                                let tax = new Tax(taxData);

                                tax.save().then((ret)=>{
                                    Guest.find({"objectId":objectId}, (err, guests)=>{
                                        if(err) console.log(err);
                                        else {
                                            res.json(guests);                      
                                        }
                                    })
                                }).catch((err)=>{
                                    res.status(400).json({ "message": "Greška pri obračunu takse."});
                                })
                            }
                        });
                    }else{
                        Guest.find({"objectId":objectId}, (err, guests)=>{
                            if(err) console.log(err);
                            else {
                                res.json(guests);                      
                            }
                        })
                    }                    
                }
            }           
        );          
    } 

    removeGuest = (req: express.Request, res: express.Response)=>{
        let id = req.body._id;
        let objectId = req.body.objectId;

        Guest.deleteOne({ "_id" : id} ).then((ret) => {
            Guest.find({"objectId":objectId},
                (err, guests)=>{
                    if(err) console.log(err);
                    else {
                        res.json(guests);                      
                    }
            })
        } )
        
    }

    getAllTaxes = (req: express.Request, res: express.Response)=>{

        let objectId = req.body.objectId;
        
        Tax.find({ "objectId" : objectId },
            (err, taxes)=>{
                if(err) console.log(err);
                else {
                    res.json(taxes);                      
                }
        })
    }

    payTax = (req: express.Request, res: express.Response)=>{

        let taxId = req.body.taxId;
        let bill = req.body.bill;

        Tax.findOneAndUpdate({'_id': taxId},{
                "paid" : true ,
                "billInfo": bill
            }            
            ,{
                "useFindAndModify" : false
            } , (err , tax:any ) => {

                if(err) console.log(err);
                else {
                    let objectId = tax.objectId;
        
                    Tax.find({ "objectId" : objectId },
                        (err, taxes)=>{
                            if(err) console.log(err);
                            else {
                                res.json(taxes);                      
                            }
                    })                     
                }
            }
        );          
    }

}