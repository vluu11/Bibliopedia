const typeDefs = `
type Query {
  me: User
  getUser(id: ID, username: String): User
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String, username: String, password: String!): Auth
  saveBook(input: BookInput!): User
  removeBook(bookId: String!): User
}

type User {
  _id: ID!
  username: String!
  email: String!
  bookCount: Int
  savedBooks: [Book]
}

type Book {
  bookId: String!
  authors: [String]
  description: String
  title: String
  image: String
  link: String
}

input BookInput {
  bookId: String!
  authors: [String]
  description: String
  title: String
  image: String
  link: String
}

type Auth {
  token: String!
  user: User
}
`;

export default typeDefs;
