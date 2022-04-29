import React from "react";
import TextField from "@mui/material/TextField";

import {
  selectAddressLine1,
  selectAddressLine2,
  selectCity,
  selectState,
  selectPostalCode,
  setAddressLine1,
  setAddressLine2,
  setCity,
  setState,
  setPostalCode,
} from "../../state-management/customer-slice";

import { useAppDispatch, useAppSelector } from "../../state-management";

import styles from "./customer-address-info.module.scss";

const CustomerAddressInfo = () => {
  const dispatch = useAppDispatch();
  const addressLine1 = useAppSelector(selectAddressLine1);
  const addressLine2 = useAppSelector(selectAddressLine2);
  const city = useAppSelector(selectCity);
  const state = useAppSelector(selectState);
  const postalCode = useAppSelector(selectPostalCode);

  return (
    <div>
      <TextField
        label="Address Line 1"
        value={addressLine1}
        onChange={(e) => dispatch(setAddressLine1(e.target.value))}
      />
      <TextField
        label="Address Line 2"
        value={addressLine2}
        onChange={(e) => dispatch(setAddressLine2(e.target.value))}
      />
      <TextField
        label="City"
        value={city}
        onChange={(e) => dispatch(setCity(e.target.value))}
      />
      <TextField
        label="State"
        value={state}
        onChange={(e) => dispatch(setState(e.target.value))}
      />
      <TextField
        label="Postal Code"
        value={postalCode}
        onChange={(e) => dispatch(setPostalCode(e.target.value))}
      />
    </div>
  );
};

export { CustomerAddressInfo };
