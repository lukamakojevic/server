import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let MyRequest = new Schema(
    {
        objectId: {
            type: String
        },
        object: {
            type: JSON
        },
        stars: {
            type: Number
        },
        date: {
            type: String
        },
        dateFrom: {
            type: String
        },
        dateTo: {
            type: String
        },
        status: {
            type:String
        },
        approvedById: {
            type: String
        }
    }
);

export default mongoose.model('MyRequest', MyRequest, 'zahtevi');