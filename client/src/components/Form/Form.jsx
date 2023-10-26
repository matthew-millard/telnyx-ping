import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER_ACCOUNT } from "../../graphql/mutations";
import { Input, Button, Select } from "../../components";
import css from "./Form.module.css";

function Form() {
  const [createUserAccount, { error, loading }] = useMutation(CREATE_USER_ACCOUNT);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    addressOne: "",
    addressTwo: "",
    townCity: "",
    province: "",
    postalCode: "",
    country: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // TODO: Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      console.log(formData.password, formData.confirmPassword);
      console.log("Passwords do not match");
      return;
    }
    // Remove confirmPassword from formData
    const userDataToSend = { ...formData };
    delete userDataToSend.confirmPassword;

    // TODO: Send data to server
    const response = await createUserAccount({ variables: { input: userDataToSend } });
    console.log(response);
    // TODO: Handle response from server
    // TODO: Display toast notification on success or error
    // TODO: Reset form
  }

  return (
    <form onSubmit={handleSubmit} className={css.formContainer} data-testid="form">
      <fieldset className={css.personalContainer}>
        <legend>Personal Information</legend>
        <Input
          type="text"
          label="First Name"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required={true}
        />
        <Input
          type="text"
          label="Last Name"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required={true}
        />
      </fieldset>
      <fieldset className={css.contactContainer}>
        <legend>Contact Information</legend>
        <Input
          type="email"
          label="Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required={true}
        />
        <Input
          type="tel"
          label="Mobile Number"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleInputChange}
          required={true}
        />
        <Input
          type="text"
          label="Address Line 1"
          id="addressOne"
          name="addressOne"
          value={formData.addressOne}
          onChange={handleInputChange}
          required={true}
        />
        <Input
          type="text"
          label="Address Line 2 (Optional)"
          id="addressTwo"
          name="addressTwo"
          value={formData.addressTwo}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="Town/City"
          id="townCity"
          name="townCity"
          value={formData.townCity}
          onChange={handleInputChange}
          required={true}
        />
        <Select
          id="provinceSelect"
          name="province"
          label="Province"
          value={formData.province}
          onChange={handleInputChange}
          options={[
            { value: "", label: "Select a province", disabled: true },
            { value: "Alberta", label: "Alberta" },
            { value: "British Columbia", label: "British Columbia" },
            { value: "Manitoba", label: "Manitoba" },
            { value: "New Brunswick", label: "New Brunswick" },
            { value: "Newfoundland and Labrador", label: "Newfoundland and Labrador" },
            { value: "Northwest Territories", label: "Northwest Territories" },
            { value: "Nunavut", label: "Nunavut" },
            { value: "Nova Scotia", label: "Nova Scotia" },
            { value: "Ontario", label: "Ontario" },
            { value: "Prince Edward Island", label: "Prince Edward Island" },
            { value: "Quebec", label: "Quebec" },
            { value: "Saskatchewan", label: "Saskatchewan" },
            { value: "Yukon", label: "Yukon" },
          ]}
        />
        <Input
          type="text"
          label="Postal Code"
          id="postalCode"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
          required={true}
        />
        <Select
          id="countrySelect"
          name="country"
          label="Country"
          value={formData.country}
          onChange={handleInputChange}
          options={[
            { value: "", label: "Select a country", disabled: true },
            { value: "Canada", label: "Canada" },
          ]}
        />
      </fieldset>
      <fieldset className={css.accountContainer}>
        <legend>Account Information</legend>
        <Input
          type="text"
          label="Username"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required={true}
        />
        <Input
          type="password"
          label="Password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required={true}
        />
        <Input
          type="password"
          label="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          required={true}
          extraInformation="At least 8 characters, 1 uppercase letter, 1 number & 1 symbol"
        />
      </fieldset>
      <div className={css.submitButtonContainer}>
        <Button type="submit" label="Create Account" loading={loading} />
        {error && <p className="errorMessage">{error.message}</p>}
      </div>
    </form>
  );
}

export default Form;
