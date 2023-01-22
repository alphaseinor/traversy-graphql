require("dotenv").config()
const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const schema = require("./schema.js")

const app = express()

/**
 * @param {string} - path to GraphQL
 * @param {function} - express-graphql interface
 */
app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}))

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})