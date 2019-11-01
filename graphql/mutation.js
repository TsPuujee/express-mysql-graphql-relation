var {GraphQLNonNull, GraphQLString, GraphQLInt} = require('graphql');
var { AuthorType, BookType } = require('./query');
var Author = require('../model/Author');
var Book = require('../model/Book');

const createAuthor = {
    type: AuthorType,
    args: {
        name: {
            name: 'name',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (root, params) {
        const uModel = new Author(params);
        const newAuthor = await Author.save(uModel);
        if(!newAuthor) {
            throw new Error('Error')
        }
        return newAuthor
    }
}
const createBook = {
    type: BookType,
    args: {
        name: {
            name: "name",
            type: new GraphQLNonNull(GraphQLString)
        },
        price: {
            name: "price",
            type: new GraphQLNonNull(GraphQLInt)
        },
        author_id: {
            name: "author_id",
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: async function(root, param) {
        const bookModel = new Book(param);
        const savePost = await Book.save(bookModel);
        if(!savePost) {
            throw new Error('Error')
        }
        return savePost;
    }
}
module.exports = { createAuthor, createBook }