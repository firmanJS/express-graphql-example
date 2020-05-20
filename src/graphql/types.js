const {
    GraphQLString,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLInputObjectType
} = require('graphql');

const BookType = new GraphQLObjectType({
    name: 'BookType',
    description: 'Book list',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        author: { type: GraphQLString }
    }
});

const BookCreateType = new GraphQLInputObjectType({
    name: 'BookCreateType',
    description: 'Add a book to the list',
    type: BookType,
    fields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        author: { type: new GraphQLNonNull(GraphQLString) }
    }
});

module.exports = { BookType,BookCreateType }