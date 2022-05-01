import React from "react";
import {
  CreditCardInput,
  SquarePaymentsForm,
  PayButton,
} from "react-square-web-payments-sdk";

import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import {
  PAYMENT_CONFIG_APP_ID,
  PAYMENT_CONFIG_LOCATION_ID,
} from "../../config";

import { paymentTypes } from "../../content/payment-types";

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
      <h2 className={styles.paymentForm__title}>Payment</h2>
      <div className={styles.paymentForm__section}>
        <TextField
          className={styles.paymentForm__text}
          label="Payment Amount"
          type="number"
          InputLabelProps={{
            pattern: "[0-9]*.[0-9]{2}",
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          value={paymentAmount}
          onChange={(e) => dispatch(setAmount(e.target.value))}
        />
        <FormControl>
          <InputLabel id="payment-type-label">Payment Type</InputLabel>
          <Select
            className={styles.paymentForm__select}
            labelId="payment-type-label"
            label="Payment Type"
            value={paymentType}
            onChange={(e) => dispatch(setPaymentType(e.target.value))}
          >
            <MenuItem disabled value="">
              <em>Choose payment type</em>
            </MenuItem>
            {paymentTypes.map(({ value, text }, index) => (
              <MenuItem key={index} value={value}>
                {text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <p>Mock Card Number</p>
      <p>5105 1051 0510 5100</p>
      <SquarePaymentsForm
        applicationId={PAYMENT_CONFIG_APP_ID}
        locationId={PAYMENT_CONFIG_LOCATION_ID}
        cardTokenizeResponseReceived={async ({ token }) => {
          if (token) {
            dispatch(submitPaymentAsync(token));
          }
        }}
      >
        <CreditCardInput />
      </SquarePaymentsForm>
    </div>
  );
};

export { PaymentForm };
