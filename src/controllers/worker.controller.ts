import express from 'express';
import User from '../models/user';
import MyRequest from '../models/request';
import MyObject from '../models/object';

export class WorkerController{
    getAllCaterers = (req: express.Request, res: express.Response)=>{
        
        User.find({ "type" : 1},
            (err, users)=>{
                if(err) console.log(err);
                else {
                    res.json(users);                      
                }
        })
    }   

    getAllRequests = (req: express.Request, res: express.Response)=>{
       
        MyRequest.find({ "status" : "none"},
            (err, requests)=>{
                if(err) console.log(err);
                else {
                    res.json(requests);                      
                }
        })
    }  

    acceptRequest = (req: express.Request, res: express.Response)=>{
        
        let idRequest = req.body.content._id;
        let idObject = req.body.content.objectId;
        let stars = req.body.content.stars;

        let approvedById = req.body.approvedById;

        MyObject.findOneAndUpdate({'_id':idObject},{
                "stars" : stars,
                "categoryId" : idRequest
            }            
            ,{
                "useFindAndModify" : false
            } , (err , users ) => {

                if(err) console.log(err);
                else{
                    MyRequest.findOneAndUpdate({'_id':idRequest},{
                        "status" : "approved",
                        "approvedById" : approvedById
                    }            
                    ,{
                        "useFindAndModify" : false
                    }             
                    ,(err, users) => {
                                if(err) console.log(err);
                                else {
                                    res.json(users);                      
                                }
                    })
                }
            }
        );          
    }

    declineRequest = (req: express.Request, res: express.Response)=>{
        
        let idRequest = req.body.id;
        let approvedById = req.body.approvedById;

        MyRequest.findOneAndUpdate({'_id':idRequest},{
            "status" : "declined",
            "approvedById" : approvedById
        }            
        ,{
            "useFindAndModify" : false
        }             
        ,(err, req) => {
                    if(err) console.log(err);
                    else {
                        res.json(req);                      
                    }
        })       
    }
}