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

export const validateStreetAddress = (addressLine1, addressLine2): boolean => {
  if (!addressLine1) {
    return false;
  }

  if (addressLine2 && !addressLine1) {
    return false;
  }

  return true;
};

export const validateMainAddress = (city, state, postalCode): boolean => {
  if (!city || !state || !postalCode) {
    return false;
  }

  if (state && state.length != 2) {
    return false;
  }

  if (postalCode && postalCode.length != 5) {
    return false;
  }

  return true;
};
