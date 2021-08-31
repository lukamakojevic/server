import express from 'express';
import { AdminController } from '../controllers/admin.controller';
const adminRouter = express.Router();

adminRouter.route('/getAllUsers').post(
    (req, res)=>{
        new AdminController().getAllUsers(req, res)
    }
);

adminRouter.route('/updateUser').post(
    (req, res)=>{
        new AdminController().updateUser(req, res)
    }
);

adminRouter.route('/addNewUser').post(
    (req, res)=>{
        new AdminController().addNewUser(req, res)
    }
);

adminRouter.route('/removeUser').post(
    (req, res)=>{
        new AdminController().removeUser(req, res)
    }
);

export default adminRouter;