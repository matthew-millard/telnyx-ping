import { gql } from "@apollo/client";

export const CREATE_USER_ACCOUNT = gql`
  mutation createUserAccount($input: userAccountInput!) {
    createUserAccount(input: $input) {
      success
      message
      user {
        _id
        firstName
        lastName
        email
        mobileNumber
        addressOne
        addressTwo
        townCity
        province
        postalCode
        country
        username
        password
        createdAt
        updatedAt
      }
    }
  }
`;
