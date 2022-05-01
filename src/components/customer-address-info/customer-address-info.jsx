import React from "react";
import TextField from "@mui/material/TextField";
import cn from "classnames";

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
    <div className={styles.customerAddressInfo}>
      <h2 className={styles.customerAddressInfo__title}>Address</h2>
      <TextField
        label="Address Line 1"
        name="address-1"
        value={addressLine1}
        onChange={(e) => dispatch(setAddressLine1(e.target.value))}
      />
      <TextField
        label="Address Line 2"
        name="address-2"
        value={addressLine2}
        onChange={(e) => dispatch(setAddressLine2(e.target.value))}
      />
      <div className={cn(styles.customerAddressInfo__section)}>
        <TextField
          label="City"
          name="city"
          value={city}
          onChange={(e) => dispatch(setCity(e.target.value))}
        />
        <TextField
          label="State"
          name="state"
          inputProps={{ maxLength: 2 }}
          // maxLength={2}
          value={state}
          onChange={(e) => dispatch(setState(e.target.value))}
        />
        <TextField
          label="Postal Code"
          name="postal-code"
          value={postalCode}
          onChange={(e) => dispatch(setPostalCode(e.target.value))}
        />
      </div>
    </div>
  );
};

export { CustomerAddressInfo };
