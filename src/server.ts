import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes';
import adminRouter from './routes/admin.routes';
import workerRouter from './routes/worker.routes';
import catererRouter from './routes/caterer.routes';

const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));

mongoose.connect('mongodb://localhost:27017/turisticke_usluge');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('mongo ok')
});

const router = express.Router();
router.use('/users', userRouter)
router.use('/admin', adminRouter)
router.use('/worker', workerRouter)
router.use('/caterer', catererRouter)

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));