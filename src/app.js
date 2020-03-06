const express = require('express');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');
const models = require('../db/models');
 
models.sequelize.sync().then(function() {
  console.log('Nice! Database')
}).catch(function(err) {
  console.log(err,'Database')
})
require('./routes')(app);


// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
 
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
 
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);