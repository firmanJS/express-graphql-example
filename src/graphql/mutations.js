const uuidv4 = require('uuid');
const { GraphQLNonNull, GraphQLObjectType } = require('graphql');

const {
    BookType,
    BookCreateType
} = require('./types.js');

const books = require('../../data/book.models');

const BookMutationType = new GraphQLObjectType({
    name: 'BookMutationType',
    description: 'Mutations for BookType',
    fields: {
        createBook: {
            type: BookType,
            args: {
                input: { type: new GraphQLNonNull(BookCreateType) }
            },
            resolve: (source, { input }) => {
                let book = [];
                // book.id = uuidv4();
                book.id = 1;
                book.name = input.name;
                book.author = input.author;
                books.push(book);
                return book;
            }
        }
    }
});

module.exports = BookMutationType;