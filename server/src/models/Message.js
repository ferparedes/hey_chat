import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    }    
});

const messageSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },    
    type: {
        type: String,
        enum: ['text', 'file'],
        default: 'text'
    },
    value: {
        type: String
    }    
});

export default model('Message', messageSchema);
