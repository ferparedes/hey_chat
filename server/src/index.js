import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { connect } from './database';
import schemas from './schemas'

connect();

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schemas,
    graphiql: true,
    context: {
    }
}));

app.listen(1987);
console.log('Running a GraphQL API server at http://localhost:1987/graphql');
