import { gql } from "@apollo/client";

export const CREATE_USER_ACCOUNT = gql`
  mutation createUserAccount($input: createAccountInput!) {
    createUserAccount(input: $input) {
      success
      pendingVerification
      message
    }
  }
`;

export const VERIFY_PHONE_NUMBER = gql`
  mutation verifyPhoneNumber($input: verifyPhoneNumberInput!) {
    verifyPhoneNumber(input: $input) {
      success
      message
    }
  }
`;
