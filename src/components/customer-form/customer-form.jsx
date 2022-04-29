import React from "react";
import TextField from "@mui/material/TextField";

import {
  selectFirstName,
  // selectLastName,
  // selectCompanyName,
  // selectEmailAddress,
  // selectPhoneNumber,
  setFirstName,
  // setLastName,
  // setCompanyName,
  // setEmailAddress,
  // setPhoneNumber,
} from "../../state-management/customer-slice";
import { useAppDispatch, useAppSelector } from "../../state-management";
import { CustomerAddressInfo } from "../customer-address-info";
import { CustomerContactInfo } from "../customer-contact-info";

import styles from "./customer-form.module.scss";

const CustomerForm = () => {
  const dispatch = useAppDispatch();
  const firstName = useAppSelector(selectFirstName);
  // const lastName = useAppSelector(selectLastName);
  // const companyName = useAppSelector(selectCompanyName);
  // const emailAddress = useAppSelector(selectEmailAddress);
  // const phoneNumber = useAppSelector(selectPhoneNumber);

  return (
    <div>
      <CustomerContactInfo />
      <CustomerAddressInfo />
      <TextField
        label="First Name"
        value={firstName}
        onChange={(e) => dispatch(setFirstName(e.target.value))}
      />
      {/* <TextField
        label="Last Name"
        value={lastName}
        onChange={(e) => dispatch(setLastName(e.target.value))}
      />
      <TextField
        label="Company Name"
        value={companyName}
        onChange={(e) => dispatch(setCompanyName(e.target.value))}
      />
      <TextField
        label="Email Address"
        value={emailAddress}
        onChange={(e) => dispatch(setEmailAddress(e.target.value))}
      />
      <TextField
        label="Phone Number"
        value={phoneNumber}
        onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
      /> */}
    </div>
  );
};

export { CustomerForm };
