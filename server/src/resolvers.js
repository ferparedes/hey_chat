import User from './models/User';

export const resolvers = {
    Query: {
        hello: () => {
            return 'test';
        }
    },
    Mutation: {
        async createUser(_, { input }) {
            const user = new User(input);
            await user.save();
            return user;
        }
    }
};