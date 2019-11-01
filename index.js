const express = require('express');
const express_graphql = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const Schema = require('./schema')
const app = express();

app.use('/graphql', express_graphql({
    schema: Schema,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));