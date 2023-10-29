import bcrypt from "bcrypt";
import { VerificationCode } from "../models/Index.js";

async function validateVerificationCode(phoneNumber, providedVerificationCode) {
  // Find verification code in database
  const retrievedCode = await VerificationCode.findOne({
    phoneNumber,
  });

  // Check if verification code exists
  if (!retrievedCode) {
    return {
      success: false,
      message: "Verification code does not exist.",
    };
  }

  // Compare verification code
  const isMatch = await bcrypt.compare(providedVerificationCode, retrievedCode.verificationCode);

  // Check if verification code matches
  if (!isMatch) {
    return {
      success: false,
      message: "Verification code does not match.",
    };
  }

  return {
    success: true,
    message: "Verification code matches.",
  };
}

export default validateVerificationCode;
