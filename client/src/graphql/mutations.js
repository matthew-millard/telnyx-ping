import { gql } from "@apollo/client";

export const CREATE_APPOINTMENT = gql`
  mutation createAppointment($input: AppointmentInput!) {
    createAppointment(input: $input) {
      success
      message
      client {
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
        createdAt
        updatedAt
      }
    }
  }
`;
