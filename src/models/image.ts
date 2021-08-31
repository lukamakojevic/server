import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Image = new Schema(
    {
        objectId: {
            type: String
        },
        content: {
            type: JSON
        }
    }
);

export default mongoose.model('Image', Image, 'fotografije');