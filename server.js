import { ApolloServer } from 'apollo-server'
import typeDefs from './graphql/typeDefs.js'
import mongoose from 'mongoose'
import resolvers from './graphql/resolvers/index.js'




const server = new ApolloServer({
    typeDefs,
    resolvers
})


mongoose
    .connect('mongodb+srv://@cluster0.kzqqd.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connected');
        return server.listen({ port: 5000 });
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    });

