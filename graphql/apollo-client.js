const { ApolloClient, InMemoryCache } = require("@apollo/client");

const apolloClient = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});
export default apolloClient;
