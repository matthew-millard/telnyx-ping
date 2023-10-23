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
    country: "",
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
        <Button type="submit" label="Book" />
      </form>
    </div>
  );
}

export default Form;
