import React from "react";
import { Form } from "../../components";
import { render, screen, beforeEach, fireEvent, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import { CREATE_USER_ACCOUNT } from "../../graphql/mutations";

const mocks = [
  {
    request: {
      query: CREATE_USER_ACCOUNT,
      variables: {
        input: {
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          mobileNumber: "123-456-7890",
          addressOne: "123 Main St",
          addressTwo: "Apt 4B",
          townCity: "Ottawa",
          province: "Ontario",
          postalCode: "12345",
          country: "Canada",
          username: "johndoe",
          password: "Securepassword1!",
        },
      },
      result: {
        data: {
          createUserAccount: {
            success: true,
            message: "User created successfully!",
            user: {
              _id: "1234567890",
              firstName: "John",
              lastName: "Doe",
              email: "john.doe@example.com",
              mobileNumber: "123-456-7890",
              addressOne: "123 Main St",
              addressTwo: "Apt 4B",
              townCity: "Ottawa",
              province: "Ontario",
              postalCode: "12345",
              country: "Canada",
              username: "johndoe",
              password: "Securepassword1!",
              createdAt: "2023-10-20T10:00:00Z",
              updatedAt: "2023-10-20T10:00:00Z",
            },
          },
        },
      },
    },
  },
];

// Make sure to invoke renderForm function before each test. This will render the form first.
function renderForm() {
  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Form />
    </MockedProvider>,
  );
}

describe("Form component", () => {
  it("should render the form", () => {
    renderForm();
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });

  it("should render the Input & Select elements", () => {
    renderForm();
    // Input elements
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Mobile Number")).toBeInTheDocument();
    expect(screen.getByLabelText("Address Line 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Address Line 2 (Optional)")).toBeInTheDocument();
    expect(screen.getByLabelText("Town/City")).toBeInTheDocument();
    expect(screen.getByLabelText("Postal Code")).toBeInTheDocument();
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();

    // Select Elements
    expect(screen.getByLabelText("Province")).toBeInTheDocument();
    expect(screen.getByLabelText("Country")).toBeInTheDocument();
  });

  it("should not submit form if passwords don't match", async () => {
    renderForm();
    fireEvent.change(screen.getByLabelText("Password"), { target: { value: "Password1!" } });
    fireEvent.change(screen.getByLabelText("Confirm Password"), {
      target: { value: "Password2!" },
    });
    fireEvent.click(screen.getByText("Create Account"));

    // TODO: I need to decide how I would like to handle this error, then write a test and then write the logic in the handleSubmit to pass the test.
  });
});
