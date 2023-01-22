const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt, 
    GraphQLSchema, 
    GraphQLList, 
    GraphQLNonNull
} = require("graphql")

const customers = [
    {
        id: "1",
        name: "Jane Doe",
        email: "Jane@doe.com",
        age: 35
    },
    {
        id: "2",
        name: "Joe Schmoe",
        email: "Joe@Schmoe.com",
        age: 35
    },
    {
        id: "3",
        name: "Brian Hague",
        email: "brian@dontemailme.com",
        age: 35
    },
]

const CustomerType = new GraphQLObjectType({
    name: "Customer",
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        customer: {
            type: CustomerType,
            args: {
                id: {type: GraphQLString}
            },
            resolve(parentValue, args){
                return customers.filter((customer) => customer.id === args.id)[0]
            }
        },
        customers: {
            type: new GraphQLList(CustomerType),
            resolve(parentValue, args){
                return customers
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})