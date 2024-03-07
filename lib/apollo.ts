// apolloClient.js
import { ApolloClient, InMemoryCache } from "@apollo/client";
import config from "./config";

const environment = process.env.NODE_ENV || "development";
const { graphqlUri } = config[environment];

const apolloClient = new ApolloClient({
  uri: graphqlUri,
  cache: new InMemoryCache(),
});

export default apolloClient;
