import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import cn from "classnames";

import { useAppDispatch, useAppSelector } from "../../state-management";
import {
  selectFirstName,
  selectLastName,
  selectCompanyName,
  selectEmailAddress,
  selectPhoneNumber,
  setFirstName,
  setLastName,
  setCompanyName,
  setEmailAddress,
  setPhoneNumber,
} from "../../state-management/customer-slice";
import { incrementCurrentStep } from "../../state-management/workflow-slice";
import {
  validateEmailAddress,
  validateNames,
  validatePhoneNumber,
} from "../../utils/validation-utils";
import { WorkflowButtons } from "../workflow-buttons";

import styles from "./customer-contact-info.module.scss";

const CustomerContactInfo = () => {
  const [errors, setErrors] = useState({
    name: false,
    emailAddress: false,
    phoneNumber: false,
  });
  const dispatch = useAppDispatch();
  const companyName = useAppSelector(selectCompanyName);
  const firstName = useAppSelector(selectFirstName);
  const lastName = useAppSelector(selectLastName);
  const emailAddress = useAppSelector(selectEmailAddress);
  const phoneNumber = useAppSelector(selectPhoneNumber);

  const goToNextStep = () => {
    const areNamesValid = validateNames(firstName, lastName, companyName);
    const isPhoneNumberValid = validatePhoneNumber(phoneNumber);
    const isEmailAddressValid = validateEmailAddress(emailAddress);

    setErrors({
      name: !areNamesValid,
      emailAddress: !isEmailAddressValid,
      phoneNumber: !isPhoneNumberValid,
    });

    if (areNamesValid && isPhoneNumberValid && isEmailAddressValid) {
      dispatch(incrementCurrentStep());
    }
  };

  return (
    <div className={styles.customerContactInfo}>
      <p
        className={cn(
          styles.customerContactInfo__message,
          errors.name && styles.customerContactInfo__messageError
        )}
      >
        Provide either company name or first/last name.
      </p>
      <div className={cn(styles.customerContactInfo__section)}>
        <TextField
          label="Company Name"
          name="orginization"
          value={companyName}
          onChange={(e) => dispatch(setCompanyName(e.target.value))}
          error={errors.name}
        />
      </div>
      <div
        className={cn(
          styles.customerContactInfo__section,
          styles.customerContactInfo__sectionNames
        )}
      >
        <TextField
          label="First Name"
          name="given-name"
          value={firstName}
          onChange={(e) => dispatch(setFirstName(e.target.value))}
          error={errors.name}
        />
        <TextField
          label="Last Name"
          name="family-name"
          value={lastName}
          onChange={(e) => dispatch(setLastName(e.target.value))}
          error={errors.name}
        />
      </div>
      <div
        className={cn(
          styles.customerContactInfo__section,
          styles.customerContactInfo__sectionContact
        )}
      >
        <TextField
          label="Email Address"
          name="email"
          value={emailAddress}
          onChange={(e) => dispatch(setEmailAddress(e.target.value))}
          error={errors.emailAddress}
        />
        <TextField
          label="Phone Number"
          name="tel"
          value={phoneNumber}
          onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
          error={errors.phoneNumber}
        />
      </div>
      <WorkflowButtons goToNextStep={goToNextStep} />
    </div>
  );
};
export { CustomerContactInfo };
