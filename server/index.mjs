import express from 'express'
import http from 'http'
import cors from 'cors'
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import fakeData from './fakeData/index.js'
import { argv } from 'process';

const app = express();
const httpServer = http.createServer(app);

const typeDefs = `
    type Folder {
        id: String,
        name : String,
        createdAt: String,
        author: Author,
    }

    type Author{
        id: String, 
        name: String,
    }

    type Query {
        folders: [Folder]
    }
`;
const resolvers = {
    Query: {
        folders: () => {
            return fakeData.folders
        },
    },
    Folder: {
        author: (parent, arg) => {
            const authorId = parent.authorId;
            return fakeData.authors.find(author => author.id === authorId);
        },
    },
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