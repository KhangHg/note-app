import express from 'express'
import http from 'http'
import cors from 'cors'
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';

const app = express();
const httpServer = http.createServer(app);

const typeDefs = `
    type Query {
        name: String
    }
`;
const resolvers = {
    Query: {
        name: () => {
            return 'hello world'
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})

await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

await new Promise((resolver) => httpServer.listen({ port: 4000 }, resolver));
console.log('Running localhost:4000');