import { validate } from "email-validator";

export const validateNames = (firstName, lastName, companyName): boolean => {
  if (firstName && !lastName) {
    return false;
  }

  if (lastName && !firstName) {
    return false;
  }

  if (companyName && firstName) {
    return false;
  }

  if (companyName && lastName) {
    return false;
  }

  if (!companyName && (!lastName || !firstName)) {
    return false;
  }

  return true;
};

export const validatePhoneNumber = (phoneNumber): boolean => {
  return (
    phoneNumber.trim() === "" ||
    (phoneNumber.match(/^[0-9]*$/) && phoneNumber.length === 10)
  );
};

export const validateEmailAddress = (emailAddress): boolean =>
  emailAddress.trim() === "" || validate(emailAddress);
