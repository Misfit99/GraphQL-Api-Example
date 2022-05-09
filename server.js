const path = require('path');
const express = require('express');

// express middleware function that respond to graphQL queries
//const {graphqlHTTP} = require('express-graphql');

const {
    ApolloServer
} = require('apollo-server-express');

//the function by graphql-tools 
const {
    loadFilesSync
} = require('@graphql-tools/load-files');
const {
    makeExecutableSchema
} = require('@graphql-tools/schema');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

async function startApolloServer() {
    const app = express();
    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray
    });
    const server = new ApolloServer({
        schema
    });

    await server.start();
    server.applyMiddleware({app, path: '/graphql'});

    app.listen(3000, () => {
        console.log('Running GraphQL server...');
    });
}

startApolloServer();
