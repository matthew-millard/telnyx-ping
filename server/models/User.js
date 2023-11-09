import { Schema, model } from "mongoose";
import isValidEmail from "../utils/isValidEmail.js";
import isValidPhoneNumber from "../utils/isValidPhoneNumber.js";
import isValidPassword from "../utils/isValidPassword.js";

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      validate: {
        validator: isValidEmail,
        message: (props) => `${props.value} is not a valid email address!`,
      },
      required: true,
      trim: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      validate: {
        validator: isValidPhoneNumber,
        message: (props) => `${props.value} is not a valid phone number!`,
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
    username: { type: String, required: true, trim: true, unique: true },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: isValidPassword,
        message: (props) => isValidPassword(props.value).message,
      },
    },
    isVerified: { type: Boolean, default: false },
    expireAt: { type: Date, default: Date.now, index: { expires: "5m" } },
  },
  {
    timestamps: true,
  },
);

const User = model("User", UserSchema);

export default User;
