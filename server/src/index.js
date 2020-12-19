const sendMessage = require("../resolvers/mutation");
const getData = require("../resolvers/query");
const { ApolloServer } = require("apollo-server");
const fs = require("fs");
const path = require("path");

const resolvers = {
  Query: {
    getData,
  },
  Mutation: {
    sendMessage,
  },
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf-8"),
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
