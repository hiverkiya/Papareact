import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import { NextApiRequest, NextApiResponse } from "next";
import { createServer } from "@graphql-yoga/node";
const server = createServer<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema: {
    typeDefs,
    resolvers,
  },
});
export default server;
