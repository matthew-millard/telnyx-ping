const typeDefs = `
type Client {
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
  createdAt: String
  updatedAt: String
}

type AppointmentMutationResponse {
    success: Boolean!
    message: String
    client: Client
}

input AppointmentInput {
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
}


type Query {
    hello: String
}


type Mutation {
    createAppointment(
        input: AppointmentInput!
    ): AppointmentMutationResponse!
    }
`;

export default typeDefs;
