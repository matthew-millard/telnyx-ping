const typeDefs = `
type User {
    _id: ID
  firstName: String!
  lastName: String!
  email: String!
  mobileNumber: String!
  addressOne: String!
  addressTwo: String
  townCity: String!
  province: String!
  postalCode: String!
  country: String!
  username: String!
  password: String!
  createdAt: String
  updatedAt: String
}

type createUserAccountResponse {
    success: Boolean!
    message: String
    user: User
}

input userAccountInput {
    firstName: String!
    lastName: String!
    email: String!
    mobileNumber: String!
    addressOne: String!
    addressTwo: String
    townCity: String!
    province: String!
    postalCode: String!
    country: String!
    username: String!
    password: String!
}


type Query {
    hello: String
}


type Mutation {
    createUserAccount(
        input: userAccountInput!
    ): createUserAccountResponse!
    }
`;

export default typeDefs;
