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
        async createMessage(_, { input }, { pubsub }) {
            const msg = new Message(input);
            await msg.save().then(m => m.populate('user').execPopulate());

            pubsub.publish('messageAdded', {
                messageAdded: msg
            });

            return msg;
        }
    },
    Subscription: {
        messageAdded: {
            subscribe(parent, args, { pubsub }) {
                return pubsub.asyncIterator('messageAdded');
            }
        }
    }
};