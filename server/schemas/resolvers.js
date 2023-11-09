import { User, VerificationCode } from "../models/Index.js";
import bcrypt from "bcrypt";
import generateOTP from "../utils/generateOTP.js";
import config from "../config.js";
import Telnyx from "telnyx";
import validateVerificationCode from "../utils/isValidVerificationCode.js";

// Initialize Telnyx with API Key
const telnyx = Telnyx(process.env.TELNYX_API_KEY);

const resolvers = {
  Query: {
    hello: () => "Hello World!",
  },
  Mutation: {
    createUserAccount: async (_, { input }) => {
      try {
        const { phoneNumber } = input;
        const generatedToken = generateOTP(config.TOKEN_LENGTH);

        // Hash one time password
        const saltRounds = 10;
        const hashedGeneratedToken = await bcrypt.hash(generatedToken, saltRounds);

        // Save verification code to database
        await VerificationCode.create({
          phoneNumber: phoneNumber,
          verificationCode: hashedGeneratedToken,
        });

        // Send verification code to user's phone
        telnyx.messages.create({
          to: `${config.COUNTRY_CODE}${phoneNumber}`,
          from: `${config.FROM_NUMBER}`,
          text: `Your verification code is ${generatedToken}`,
        });

        // Salt & hash the password
        const hashedPassword = await bcrypt.hash(input.password, saltRounds);

        // Replace plain password with hashed one
        input.password = hashedPassword;

        await User.create({
          ...input,
        });

        return {
          success: true,
          pendingVerification: true,
          message: "Please enter the verification code sent to your phone number.",
        };
      } catch (err) {
        throw new Error("Error creating user account", err);
      }
    },
    verifyPhoneNumber: async (_, { input }) => {
      const { phoneNumber, verificationCode } = input;
      console.log(phoneNumber, verificationCode);

      try {
        // Validate verification code
        const isValid = await validateVerificationCode(phoneNumber, verificationCode);

        if (!isValid.success) {
          return {
            success: false,
            message: isValid.message,
          };
        }

        // Update user's verification status to true and remove TTL
        await User.updateOne(
          { phoneNumber },
          {
            $set: { isVerified: true },
            $unset: { expireAt: 1 },
          },
        );

        return {
          success: true,
          message: "Your account has been successfully verified.",
        };
      } catch (err) {
        throw new Error("Error verifying phone number", err);
      }
    },
  },
};

export default resolvers;
