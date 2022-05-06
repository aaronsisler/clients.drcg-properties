import React, { useState } from "react";
import {
  CreditCardInput,
  SquarePaymentsForm,
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
  selectIsProcessing,
  selectPaymentType,
  setAmount,
  setIsProcessing,
  setPaymentType,
  submitPaymentAsync,
} from "../../state-management/payment-slice";
import { useAppDispatch, useAppSelector } from "../../state-management";
import { incrementCurrentStep } from "../../state-management/workflow-slice";

import { PaymentProcessingModal } from "../payment-processing-modal";
import { WorkflowButtons } from "../workflow-buttons";
import {} from "../../utils/validation-utils";

import styles from "./payment-form.module.scss";

const PaymentForm = () => {
  const [errors, setErrors] = useState({
    paymentAmount: false,
    paymentType: false,
    processFailure: false,
  });
  const dispatch = useAppDispatch();
  const isProcessing = useAppSelector(selectIsProcessing);
  const paymentAmount = useAppSelector(selectAmount);
  const paymentType = useAppSelector(selectPaymentType);

  const validateInputs = () => {
    const isPaymentAmoundValid = paymentAmount;
    const isPaymentTypeValid = paymentType;

    setErrors({
      paymentAmount: !isPaymentAmoundValid,
      paymentType: !isPaymentTypeValid,
    });

    return !!isPaymentAmoundValid && !!isPaymentTypeValid;
  };

  const handlePaymentSubmission = async (token) => {
    if (token && validateInputs()) {
      await dispatch(setIsProcessing(true));
      const result = await dispatch(submitPaymentAsync(token)).unwrap();
      if (result) {
        dispatch(incrementCurrentStep());
      } else {
        setErrors({ ...errors, processFailure: true });
        dispatch(setIsProcessing(false));
      }
    }
  };

  return (
    <div className={styles.paymentForm}>
      <PaymentProcessingModal isOpen={isProcessing} />
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
          error={errors.paymentAmount}
        />
        <FormControl>
          <InputLabel id="payment-type-label">Payment Type</InputLabel>
          <Select
            className={styles.paymentForm__select}
            labelId="payment-type-label"
            label="Payment Type"
            value={paymentType}
            onChange={(e) => dispatch(setPaymentType(e.target.value))}
            error={errors.paymentType}
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
      <p>Use any Exp Date, CVC, and Postal Code</p>
      <SquarePaymentsForm
        applicationId={PAYMENT_CONFIG_APP_ID}
        locationId={PAYMENT_CONFIG_LOCATION_ID}
        cardTokenizeResponseReceived={async ({ token }) =>
          handlePaymentSubmission(token)
        }
      >
        <CreditCardInput />
      </SquarePaymentsForm>
      {errors.processFailure && (
        <p className={styles.paymentForm__processError}>
          Something went wrong while processing your payment. Please try again
          or contact the DRCG Properties for assistance.
        </p>
      )}
      <WorkflowButtons />
    </div>
  );
};

export { PaymentForm };
