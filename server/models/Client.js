import { Schema, model } from "mongoose";
import isValidEmail from "../utils/isValidEmail.js";
import isValidMobileNumber from "../utils/isValidMobileNumber.js";

const ClientSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      validator: {
        validator: isValidEmail,
        message: (props) => `${props.value} is not a valid email address!`,
      },
      required: true,
      trim: true,
    },
    mobileNumber: {
      type: String,
      validator: {
        validator: isValidMobileNumber,
        message: (props) => `${props.value} is not a valid Canadian mobile number!`,
      },
      required: true,
      trim: true,
    },
    addressOne: { type: String, required: true, trim: true },
    addressTwo: { type: String, trim: true },
    townCity: { type: String, required: true, trim: true },
    province: { type: String, required: true, trim: true },
    postalCode: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

const Client = model("Client", ClientSchema);

export default Client;
