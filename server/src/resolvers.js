import User from './models/User';
import Message from './models/Message';

export const resolvers = {
    Query: {
        async chat() {
            return await Message.find().populate('user');
        }
    },
    Mutation: {
        async createUser(_, { input }) {
            const user = new User(input);
            await user.save();
            return user;
        },
        async createMessage(_, { input }) {
            const msg = new Message(input);
            await msg.save();
            return msg;
        }
    }
};