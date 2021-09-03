import express from 'express';
import User from '../models/user';

export class UserController{
    login = (req: express.Request, res: express.Response)=>{

        let username = req.body.username;
        let password = req.body.password;

        User.findOne({'username':username},
            (err, user)=>{
                
                if(err) console.log(err);
                else if(user){
                    User.findOne({'username':username , 'password': password},
                    (err, user)=>{
                        if(err) console.log(err);
                        else if(user){
                            res.json(user);
                        }else{
                            res.json("Pogrešna lozinka.");
                        }
                    })
                }else{
                    res.json("Korisnik ne postoji.");
                }
        })
    }

    loginCheck = (req: express.Request, res: express.Response)=>{

        let username = req.body.username;
        let password = req.body.password;

        User.findOne({'username':username , 'password': password}, (err, user)=>{
            if(err) console.log(err);
            else if(user){
                res.json(true);
            }else{
                res.json(false);
            }
        })
    }
}