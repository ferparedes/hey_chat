import { GraphQLServer, PubSub } from 'graphql-yoga';
import './database';
import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers';
import dotenv from 'dotenv';

dotenv.load();
const pubsub = new PubSub();
const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: {
        pubsub
    }
})
const options = {
    port: process.env.GRAPHQL_PORT || '1987'
};

server.start(options, ({ port }) => {
    console.log(`Server on http://localhost:${options.port}`);
});
