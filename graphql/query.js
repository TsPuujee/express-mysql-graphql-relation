const graqhql =  require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLSchema, GraphQLList } = graqhql
const Author = require('../model/Author')
const Book = require('../model/Book')
const AuthorType  = new GraphQLObjectType({
    name: 'AuthorType',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString}
    })
});
const BookType  = new GraphQLObjectType({
    name: 'BookType',
    fields: () => ({
        id: {type: GraphQLID },
        name: { type: GraphQLString },
        price: { type: GraphQLInt },
        author_id: { type: GraphQLString},
        author: { type: AuthorType, resolve: async function (post) {
            var author =  await Author.findId(post.author_id)
            if(!author) {
                throw new Error('Error')
            }
          return author
      }}
    })
})

const QueryRootType = new GraphQLObjectType ({
    name: 'BookAppSchema',
    fields: () => ({
        authors: {
            type: new GraphQLList(AuthorType),
            args: { size: { type: GraphQLInt, defaultValue: 10, description: 'size: type is number, defualt is 10' } , skip: { type: GraphQLInt, defaultValue: 0, description: 'skip: typeis number, defualt is 0' } , country: { type: GraphQLString, defaultValue: '', description: 'country' } },
            resolve: async function () {
                var author = await Author.getAll()
               return author;
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve: async function () {
               var books = await  Book.getAll()
               return books;
            }
        }
    })
});
module.exports= { QueryRootType, AuthorType, BookType}