import React from "react";
import TextField from "@mui/material/TextField";
import cn from "classnames";

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
import { WorkflowButtons } from "../workflow-buttons";

import { useAppDispatch, useAppSelector } from "../../state-management";

import styles from "./customer-contact-info.module.scss";

const CustomerContactInfo = () => {
  const dispatch = useAppDispatch();
  const companyName = useAppSelector(selectCompanyName);
  const firstName = useAppSelector(selectFirstName);
  const lastName = useAppSelector(selectLastName);
  const emailAddress = useAppSelector(selectEmailAddress);
  const phoneNumber = useAppSelector(selectPhoneNumber);

  let nameError = false;

  if (companyName && (firstName || lastName)) {
    nameError = true;
  }

  return (
    <div className={styles.customerContactInfo}>
      <h2 className={styles.customerContactInfo__title}>Contact Information</h2>
      <p
        className={cn(
          styles.customerContactInfo__message,
          nameError && styles.customerContactInfo__messageError
        )}
      >
        Provide either company name or first/last name.
      </p>
      <div className={cn(styles.customerContactInfo__section)}>
        <TextField
          label="Company Name"
          name="organization"
          value={companyName}
          onChange={(e) => dispatch(setCompanyName(e.target.value))}
          error={nameError}
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
          error={nameError}
        />
        <TextField
          label="Last Name"
          name="family-name"
          value={lastName}
          onChange={(e) => dispatch(setLastName(e.target.value))}
          error={nameError}
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
        />
        <TextField
          label="Phone Number"
          name="tel"
          value={phoneNumber}
          onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
        />
      </div>
    </div>
  );
};
export { CustomerContactInfo };
