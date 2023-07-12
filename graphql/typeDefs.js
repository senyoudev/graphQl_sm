import { gql } from 'apollo-server'

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
   type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type Query {
    getPosts: [Post]
  }
`;

export default typeDefs