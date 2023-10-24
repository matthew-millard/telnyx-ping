const isValidPassword = (password) => {
  // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.

  // Password must be at least 8 characters long
  if (password.length < 8)
    return { isValid: false, message: "Password must be at least 8 characters long!" };

  // Password must contain at least one uppercase letter
  if (!/[A-Z]/.test(password))
    return { isValid: false, message: "Password must contain at least one uppercase letter!" };

  // Password must contain at least one lowercase letter
  if (!/[a-z]/.test(password))
    return { isValid: false, message: "Password must contain at least one lowercase letter!" };

  // Password must contain at least one number
  if (!/[0-9]/.test(password))
    return { isValid: false, message: "Password must contain at least one number!" };

  // Password must contain at least one special character
  if (!/[!@#$%^&*]/.test(password))
    return { isValid: false, message: "Password must contain at least one special character!" };

  return { isValid: true, message: "Password is valid!" };
};

export default isValidPassword;
