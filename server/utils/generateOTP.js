// Create a function that takes in a otp length
// Set length default to 5

const otpChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function getRandomIndex() {
  return Math.floor(Math.random() * otpChars.length);
}

function generateOTP(length = 5) {
  let oneTimePassword = "";
  for (let i = 0; i < length; i += 1) {
    oneTimePassword += otpChars[getRandomIndex()];
  }

  return oneTimePassword;
}

export default generateOTP;
