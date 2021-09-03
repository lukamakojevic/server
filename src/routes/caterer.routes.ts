import express from 'express';
import { CatererController } from '../controllers/caterer.controller';

const catererRouter = express.Router();

catererRouter.route('/getAllObjects').post(
    (req, res)=>{
        new CatererController().getAllObjects(req, res);
    }
);

catererRouter.route('/addNewObject').post(
    (req, res)=>{
        new CatererController().addNewObject(req, res);
    }
);

catererRouter.route('/addNewRequest').post(
    (req, res)=>{
        new CatererController().addNewRequest(req, res);
    }
);

catererRouter.route('/getAllCatererUsernames').post(
    (req, res)=>{
        new CatererController().getAllCatererUsernames(req, res);
    }
);

catererRouter.route('/updateObjectName').post(
    (req, res)=>{
        new CatererController().updateObjectName(req, res);
    }
);

catererRouter.route('/updateObjectDetails').post(
    (req, res)=>{
        new CatererController().updateObjectDetails(req, res);
    }
);

catererRouter.route('/updateObjectAddress').post(
    (req, res)=>{
        new CatererController().updateObjectAddress(req, res);
    }
);

catererRouter.route('/grantPremission').post(
    (req, res)=>{
        new CatererController().grantPremission(req, res);
    }
);

catererRouter.route('/getObjectImages').post(
    (req, res)=>{
        new CatererController().getObjectImages(req, res);
    }
);

catererRouter.route('/addNewImage').post(
    (req, res)=>{
        new CatererController().addNewImage(req, res);
    }
);

catererRouter.route('/deleteImage').post(
    (req, res)=>{
        new CatererController().deleteImage(req, res);
    }
);

catererRouter.route('/deleteObject').post(
    (req, res)=>{
        new CatererController().deleteObject(req, res);
    }
);

catererRouter.route('/addNewGuest').post(
    (req, res)=>{
        new CatererController().addNewGuest(req, res);
    }
);

catererRouter.route('/getAllGuests').post(
    (req, res)=>{
        new CatererController().getAllGuests(req, res);
    }
);

catererRouter.route('/updateGuest').post(
    (req, res)=>{
        new CatererController().updateGuest(req, res);
    }
);

catererRouter.route('/removeGuest').post(
    (req, res)=>{
        new CatererController().removeGuest(req, res);
    }
);

catererRouter.route('/getAllTaxes').post(
    (req, res)=>{
        new CatererController().getAllTaxes(req, res);
    }
);

catererRouter.route('/payTax').post(
    (req, res)=>{
        new CatererController().payTax(req, res);
    }
);

export default catererRouter;