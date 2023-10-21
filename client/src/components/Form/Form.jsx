import React from "react";
import { Input, Button, Select } from "../../components";

function Form() {
  return (
    <div>
      <h1>Form</h1>
      <form>
        <fieldset>
          <legend>Personal Information</legend>
          <Input type="text" label="First Name" id="firstName" name="firstName" />
          <Input type="text" label="Last Name" id="lastName" name="lastName" />
        </fieldset>
        <fieldset>
          <legend>Contact Information</legend>
          <Input type="email" label="Email" id="email" name="email" />
          <Input type="tel" label="Mobile Number" id="mobileNumber" name="mobileNumber" />
          <Input type="text" label="Address Line 1" id="addressOne" name="addressOne" />
          <Input type="text" label="Address Line 2" id="addressTwo" name="addressTwo" />
          <Input type="text" label="Town/City" id="townCity" name="townCity" />
          <Input type="text" label="Province" id="province" name="province" />
          <Input type="text" label="Postal Code" id="postalCode" name="postalCode" />
          <Select
            id="countrySelect"
            name="country"
            label="Country"
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
