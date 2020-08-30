const gql  = require("graphql-tag");
module.exports = gql`
  type Query {
    book(id: ID!): Book!
    books: [Book!]!
    author(id: ID!): Author!
    authors: [Author!]!
  }
  type Mutation {
    addAuthor(name: String!, age: Int!): Author!
    addBook(name: String!, genre: String!, authorId: ID!): Book!
  }
  type Author {
    _id: ID!
    name: String!
    age: Int!
    books: [Book!]!
  }
  type Book {
    _id: ID!
    name: String!
    genre: String!
    authorId: ID!
    author: Author!
  }
`;
