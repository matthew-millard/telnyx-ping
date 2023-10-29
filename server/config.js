import "dotenv/config";

export default {
  API_KEY: process.env.TELNYX_API_KEY,
  FROM_NUMBER: process.env.TELNYX_NUMBER,
  NODE_ENV: "development",
  COUNTRY_CODE: "+1",
  TOKEN_LENGTH: 5,
};
