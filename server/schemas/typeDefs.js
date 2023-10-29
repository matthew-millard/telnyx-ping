const typeDefs = `
type User {
    _id: ID
  firstName: String!
  lastName: String!
  email: String!
  phoneNumber: String!
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
  isVerified: Boolean
}

type createUserAccountResponse {
    success: Boolean!
    message: String
    user: User
}

type phoneNumberVerificationResponse {
    success: Boolean!
    pendingVerification: Boolean!
    message: String!
}


type VerificationResponse {
    success: Boolean!
    message: String!
}

input createAccountInput {
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String!
    addressOne: String!
    addressTwo: String
    townCity: String!
    province: String!
    postalCode: String!
    country: String!
    username: String!
    password: String!
}

input verifyPhoneNumberInput {
    phoneNumber: String!
    verificationCode: String!
}


type Query {
    hello: String
}


type Mutation {
    createUserAccount(
        input: createAccountInput!
    ): phoneNumberVerificationResponse!

    verifyPhoneNumber(
        input: verifyPhoneNumberInput!
    ): VerificationResponse!
}
`;

export default typeDefs;
