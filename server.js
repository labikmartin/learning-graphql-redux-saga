const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const MyGraphQLSchema = require('./schema');

const app = express();

// Allow cors
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
