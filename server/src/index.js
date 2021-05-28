import { GraphQLServer, PubSub } from 'graphql-yoga';
import './database';
import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers';

const pubsub = new PubSub();

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: {
        pubsub
    }
})
const options = {
    port: 1987
};

server.start(options, ({ port }) => {
    console.log("Server on port:", port);
  });
  

// const app = express();

// app.use(cors());

// app.use('/graphql', graphqlHTTP({
//     schema: schemas,
//     graphiql: true,
//     context: {
//     }
// }));

// server.start(options, ({ port }) => {
//     console.log(
//         `Graphql Server started, listening on port ${port} for incoming requests.`,
//     )
// })




// // app.listen(1987);
// console.log('Running a GraphQL API server at http://localhost:1987/graphql');
