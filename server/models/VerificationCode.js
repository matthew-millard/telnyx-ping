import { Schema, model } from "mongoose";

const VerificationCodeSchema = new Schema(
  {
    phoneNumber: { type: String, required: true, trim: true },
    verificationCode: { type: String, required: true },
    expiresAt: { type: Date, default: Date.now, expires: "5m" },
  },
  {
    timestamps: true,
  },
);

const VerificationCode = model("VerificationCode", VerificationCodeSchema);

export default VerificationCode;
