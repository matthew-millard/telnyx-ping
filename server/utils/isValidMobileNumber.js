// Check if mobile number is a valid Canadian mobile number, with or without hyphens and  with or without the country code +1 or 1.

const isValidMobileNumber = (mobileNumber) =>
  /^(\+1|1)?\s?[2-9][0-9]{2}-?[0-9]{3}-?[0-9]{4}$/.test(mobileNumber);

export default isValidMobileNumber;
