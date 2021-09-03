import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let MyObject = new Schema(
    {
        name: {
            type: String
        },
        address: {
            type: String
        },
        type: {
            type: Number
        },
        owner: {
            type: String
        },
        premissions: {
            type: Array
        },
        stars: {
            type: Number
        },
        details: {
            type: String
        },
        categoryId: {
            type: String
        }
    }
);

export default mongoose.model('MyObject', MyObject, 'objekti');