import React, { useState } from "react";
import { Input, Button, Select } from "../../components";

function Form() {
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

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted", formData);
    // TODO: Send data to server
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
          />
          <Input
            type="text"
            label="Last Name"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
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
          />
          <Input
            type="tel"
            label="Mobile Number"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            label="Address Line 1"
            id="addressOne"
            name="addressOne"
            value={formData.addressOne}
            onChange={handleInputChange}
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
          />
          <Input
            type="text"
            label="Province"
            id="province"
            name="province"
            value={formData.province}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            label="Postal Code"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
          />
          <Select
            id="countrySelect"
            name="country"
            label="Country"
            value={formData.country}
            onChange={handleInputChange}
            options={[
              { value: "Canada", selected: true },
              { value: "USA", selected: false, disabled: true },
            ]}
          />
        </fieldset>
        <Button type="submit" label="Book" />
      </form>
    </div>
  );
}

export default Form;
