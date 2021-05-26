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

    type Mutation {
        createUser(input: UserInput): User
    }

    input UserInput {
        name: String!
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});