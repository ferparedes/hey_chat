import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
    user_id: {
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
