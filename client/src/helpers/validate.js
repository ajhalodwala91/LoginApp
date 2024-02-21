import toast from "react-hot-toast";

// Validate Username - Login Page
export async function validateUsername(values) {
  const errors = verifyUsername({}, values);
  return errors;
}

// Validate Password - Login Page
export async function validatePassword(values) {
  const errors = verifyPassword({}, values);
  return errors;
}

// Validate Reset Password
export async function validateResetPassword(values) {
  const errors = verifyPassword({}, values);

  if (values.password !== values.confirmPassword) {
    errors.exist = toast.error("Passwords don't match ");
  }

  return errors;
}

// Validate Register Password
export async function validateRegistration(values) {
  const errors = verifyUsername({}, values);
  verifyPassword(errors, values);
  verifyEmail(errors, values);

  return errors;
}

// Validate Profile Page
export async function validateProfile(values) {
  const errors = verifyEmail({}, values);
  return errors;
}

// Verify Username
function verifyUsername(errors = {}, values) {
  if (!values.username) {
    errors.username = toast.error("Username Required...!");
  } else if (values.username.includes(" ")) {
    errors.username = toast.error("Invalid Username...!");
  }
  return errors;
}

// Verify Password
function verifyPassword(errors = {}, values) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    errors.password = toast.error("Password Required...!");
  } else if (values.password.length < 4) {
    errors.password = toast.error("Password must be longer than 4 chars");
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must contain a special character");
  }

  return errors;
}

// Verify Email
function verifyEmail(errors = {}, values) {
  if (!values.email) {
    errors.email = toast.error("Email Required...!");
  } else if (values.email.includes(" ")) {
    errors.email = toast.error("Invalid Email...!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = toast.error("Invalid Email...!");
  }
  return errors;
}
