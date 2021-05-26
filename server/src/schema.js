import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Query {
        hello: String        
    }

    type User {
        _id: ID
        name: String!
    }

    type Message {
        _id: ID
        user_id: ID
        type: String
        value: String
    }

    type Mutation {
        createUser(input: UserInput): User
        createMessage(input: MessageInput): Message
    }

    input UserInput {
        name: String!
    }

    input MessageInput {           
        user_id: ID
        type: String
        value: String!
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});