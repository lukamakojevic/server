import express from 'express';
import User from '../models/user';

export class AdminController{
    getAllUsers = (req: express.Request, res: express.Response)=>{
        
        User.find({},
            (err, users)=>{
                if(err) console.log(err);
                else {
                    res.json(users);                      
                }
        })
    }

    updateUser = (req: express.Request, res: express.Response)=>{

        let id = req.body._id;

        User.findOneAndUpdate({'_id':id},{
                "username" : req.body.username,
                "password" : req.body.password,
                "type" : req.body.type,
                "kind" : req.body.kind,
                "registeredFlag" : req.body.registeredFlag,
                "name" : req.body.name ,
                "details" : req.body.details
            }            
            ,{
                "useFindAndModify" : false
            } , (err , users ) => {

                if(err) console.log(err);
                else{
                    User.find({}, (err, users)=>{
                                if(err) console.log(err);
                                else {
                                    res.json(users);                      
                                }
                        })
                }
            }
        );          
    }
    addNewUser = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        User.find({ "username" : username},
            (err, users)=>{
                if(err) console.log(err);
                else if(JSON.stringify(users) != "[]"){
                    res.json('Korisnik sa unetim korisničkim imenom već postoji.');                      
                }else{
                    let user = new User(req.body);

                    user.save().then((ret)=>{
                        res.status(200).json("");
                    }).catch((err)=>{
                        res.status(400).json(err);
                    })

                }
        })
    }  

    removeUser = (req: express.Request, res: express.Response)=>{
        let id = req.body._id;

        User.deleteOne({ "_id" : id} ).then((ret) => {
            User.find({},
                (err, users)=>{
                    if(err) console.log(err);
                    else {
                        res.json(users);                      
                    }
            })
        } )
        
    }
}