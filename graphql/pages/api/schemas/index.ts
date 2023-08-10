import { gql } from "apollo-server-micro";
export const typeDefs = gql`
  type User {
    id: ID
    login: String
    avatar_url: String
    html_url: String
  }
  type Query {
    getUsers: [User]
    getUserByName(name: string!): User!
  }
`;
