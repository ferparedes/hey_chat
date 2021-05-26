import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { connect } from './database';
import schema from './schema'

connect();

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: {
    }
}));

app.listen(1987);
console.log('Running a GraphQL API server at http://localhost:1987/graphql');
