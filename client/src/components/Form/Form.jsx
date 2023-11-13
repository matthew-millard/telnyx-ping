import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER_ACCOUNT, VERIFY_PHONE_NUMBER } from "../../graphql/mutations";
import { Input, Button, Select } from "../../components";
import css from "./Form.module.css";

function Form() {
  const [createUserAccount, { error, loading }] = useMutation(CREATE_USER_ACCOUNT);
  const [verifyPhoneNumber, { error: verificationError, loading: verificationLoading }] =
    useMutation(VERIFY_PHONE_NUMBER);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
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
  const [showVerificationInput, setShowVerificationInput] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleVerificationCodeChange(event) {
    setVerificationCode(event.target.value);
  }

  async function handleVerification(event) {
    event.preventDefault();
    const verificationData = {
      phoneNumber: formData.phoneNumber,
      verificationCode,
    };
    //  TODO: Send verification code to server
    const response = await verifyPhoneNumber({ variables: { input: verificationData } });
    console.log(response);
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
    const { data } = await createUserAccount({ variables: { input: userDataToSend } });

    // TODO: Handle response from server
    if (data.createUserAccount.pendingVerification) {
      setShowVerificationInput(true);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={css.formContainer} data-testid="form">
        <div className={css.titleContainer}>
          <h1>Create Account</h1>
        </div>

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
            label="Phone Number"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
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

      {showVerificationInput ? (
        <form onSubmit={handleVerification} className={css.verificationCodeContainer}>
          <Input
            type="text"
            label="Verification Code"
            id="verificationCode"
            name="verificationCode"
            onChange={handleVerificationCodeChange}
            value={verificationCode}
            extraInformation="Please enter the verification code sent to your phone number. Expires in 5 minutes."
          />
          <div className={css.verificationSubmitButton}>
            <Button type="submit" label="Verify" loading={verificationLoading} />
          </div>
          {verificationError && <p className="errorMessage">{verificationError.message}</p>}
        </form>
      ) : null}
    </>
  );
}

export default Form;
