import React from "react";
import {
  CreditCardInput,
  SquarePaymentsForm,
} from "react-square-web-payments-sdk";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  PAYMENT_CONFIG_APP_ID,
  PAYMENT_CONFIG_LOCATION_ID,
} from "../../config";

import {
  selectAmount,
  selectPaymentType,
  setAmount,
  setPaymentType,
  submitPaymentAsync,
} from "../../state-management/payment-slice";
import { useAppDispatch, useAppSelector } from "../../state-management";

import styles from "./payment-form.module.scss";

const PaymentForm = () => {
  const dispatch = useAppDispatch();
  const paymentAmount = useAppSelector(selectAmount);
  const paymentType = useAppSelector(selectPaymentType);

  return (
    <div className={styles.paymentForm}>
      <TextField
        label="Payment Amount"
        type="number"
        InputLabelProps={{
          pattern: "[0-9]*",
        }}
        value={paymentAmount}
        onChange={(e) => dispatch(setAmount(e.target.value))}
      />
      <FormControl fullWidth>
        <InputLabel id="payment-type-label">Payment Type</InputLabel>
        <Select
          labelId="payment-type-label"
          label="Payment Type"
          value={paymentType}
          onChange={(e) => dispatch(setPaymentType(e.target.value))}
        >
          <MenuItem value="PAYMENT_TYPE_TENANT_RENT">Tenant Rent</MenuItem>
          <MenuItem value="PAYMENT_TYPE_FEE_LATE">Late Fee</MenuItem>
          <MenuItem value="PAYMENT_TYPE_FEE_PARKING">Parking Fee</MenuItem>
        </Select>
      </FormControl>
      <p>Has Axios</p>
      <p>Mock Card Number</p>
      <p>5105 1051 0510 5100</p>
      <SquarePaymentsForm
        applicationId={PAYMENT_CONFIG_APP_ID}
        locationId={PAYMENT_CONFIG_LOCATION_ID}
        cardTokenizeResponseReceived={async ({ token }) =>
          dispatch(submitPaymentAsync(token))
        }
      >
        <CreditCardInput />
      </SquarePaymentsForm>
    </div>
  );
};

export { PaymentForm };
