const { GraphQLList, GraphQLObjectType } = require('graphql');

const { BookType } = require('./types.js');
const books = require('../../data/book.models');

const BookQueryType = new GraphQLObjectType({
    name: 'BookQueryType',
    description: 'Query Schema for BookType',
    fields: {
        books: {
            type: new GraphQLList(BookType),
            resolve: () => books
        }
    }
});

module.exports = BookQueryType;