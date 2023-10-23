import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_APPOINTMENT } from "../../graphql/mutations";
import { Input, Button, Select } from "../../components";

function Form() {
  const [createAppointment, { error }] = useMutation(CREATE_APPOINTMENT);
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
    country: "Canada", // Default value
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
    console.log("Form submitted", formData);
    // TODO: Send data to server
    const response = await createAppointment({ variables: { input: formData } });
    console.log(response);
    // TODO: Handle response from server
    // TODO: Display toast notification on success or error
    // TODO: Reset form
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
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
        <fieldset>
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
            label="Address Line 2"
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
          <Input
            type="text"
            label="Province"
            id="province"
            name="province"
            value={formData.province}
            onChange={handleInputChange}
            required={true}
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
            options={[{ value: "Canada" }, { value: "USA", disabled: true }]}
          />
        </fieldset>
        <Button type="submit" label="Book" />
      </form>
    </div>
  );
}

export default Form;
