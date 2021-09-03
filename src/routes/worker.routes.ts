import express from 'express';
import { WorkerController } from '../controllers/worker.controller';

const workerRouter = express.Router();

workerRouter.route('/getAllCaterers').post(
    (req, res)=>{
        new WorkerController().getAllCaterers(req, res)
    }
);

workerRouter.route('/getAllRequests').post(
    (req, res)=>{
        new WorkerController().getAllRequests(req, res)
    }
);

workerRouter.route('/acceptRequest').post(
    (req, res)=>{
        new WorkerController().acceptRequest(req, res)
    }
);

workerRouter.route('/declineRequest').post(
    (req, res)=>{
        new WorkerController().declineRequest(req, res)
    }
);

workerRouter.route('/getAllUnpaiedTaxes').post(
    (req, res)=>{
        new WorkerController().getAllUnpaiedTaxes(req, res)
    }
);

export default workerRouter;