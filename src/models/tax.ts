import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Tax = new Schema(
    {
        objectId: {
            type: String
        },
        catererId: {
            type: String
        },
        guest: {
            type: JSON
        },
        price: {
            type: Number
        },
        paid: {
            type: Boolean
        },
        billInfo: {
            type: JSON
        },
    }
);

export default mongoose.model('Tax', Tax, 'takse');