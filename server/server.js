import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import cors from "cors";
import http from "http";
import { resolvers, typeDefs } from "./schemas/index.js";
import { connect } from "./config/connection.js";

const PORT = process.env.PORT || 4000;
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const startApolloServer = async () => {
  await connect(); // Connect to MongoDB
  await server.start();

  app.use(
    "/graphql",
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );

  await new Promise((resolve) => {
    httpServer.listen({ port: PORT }, () => {
      resolve();
      console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
console.log("Starting Apollo Server...");
