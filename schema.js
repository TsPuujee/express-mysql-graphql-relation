const graqhql =  require('graphql')
const { GraphQLObjectType } = graqhql
const { QueryRootType } = require('./graphql/query')
const mutation = require('./graphql/mutation')
const { GraphQLSchema} = graqhql

module.exports = new GraphQLSchema({
    query: QueryRootType,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutation
    })
});