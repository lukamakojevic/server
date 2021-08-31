import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema(
    {
        username: {
            type: String
        },
        password: {
            type: String
        },
        type: {
            type: Number
        },
        kind: {
            type: Number
        },
        name: {
            type: String
        },
        registeredFlag: {
            type:Boolean
        },
        details: {
            type: String
        }
    }
);

export default mongoose.model('User', User, 'korisnici');