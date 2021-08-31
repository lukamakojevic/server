import express from 'express';
import MyObject from '../models/object';
import MyRequest from '../models/request';
import User from '../models/user';
import Image from '../models/image';

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

}