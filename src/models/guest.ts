import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Guest = new Schema(
    {
        objectId: {
            type: String
        },
        name: {
            type: String
        },
        idNumber:{
            type: Number
        },
        kind: {
            type: Number
        },
        age: {
            type: Number
        },
        dateCheckIn: {
            type: String
        },
        nights: {
            type: Number
        },
        details: {
            type: String
        },
        checkedOut: {
            type: Boolean
        },
        dateCheckOut: {
            type: String
        }
    }
);

export default mongoose.model('Guest', Guest, 'evidencije');