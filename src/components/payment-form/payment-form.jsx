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
  selectCustomerInputAmount,
  selectCalculatedPaymentAmount,
  selectIsProcessing,
  selectPaymentType,
  setAmounts,
  setCustomerInputAmount,
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
  const customerInputAmount = useAppSelector(selectCustomerInputAmount);
  const calculatedPaymentAmount = useAppSelector(selectCalculatedPaymentAmount);
  const paymentType = useAppSelector(selectPaymentType);

  const validateInputs = () => {
    const isCustomerInputAmountValid = customerInputAmount;
    const isPaymentTypeValid = paymentType;

    setErrors({
      customerInputAmount: !isCustomerInputAmountValid,
      paymentType: !isPaymentTypeValid,
    });

    return !!isCustomerInputAmountValid && !!isPaymentTypeValid;
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
          value={customerInputAmount}
          onChange={(e) => dispatch(setCustomerInputAmount(e.target.value))}
          onBlur={(e) => dispatch(setAmounts(e.target.value))}
          error={errors.customerInputAmount}
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
      <p>All payments subject transaction fee</p>
      <p>2.9% + $0.30 </p>
      <p>Total Amount To Be Charged: {calculatedPaymentAmount}</p>
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
