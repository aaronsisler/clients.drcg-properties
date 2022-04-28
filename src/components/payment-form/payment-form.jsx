import React, { useState } from "react";
import {
  CreditCardInput,
  SquarePaymentsForm,
} from "react-square-web-payments-sdk";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  PAYMENT_CONFIG_APP_ID,
  PAYMENT_CONFIG_LOCATION_ID,
} from "../../config";

import styles from "./payment-form.module.scss";

const PaymentForm = ({ handleSubmitPayment }) => {
  const [paymentType, setPaymentType] = useState("");
  const [paymentAmount, setPaymentAmount] = useState();

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handlePaymentAmountChange = (event) => {
    setPaymentAmount(event.target.value);
  };

  return (
    <div className={styles.paymentForm}>
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Payment Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={paymentType}
            label="Payment Type"
            onChange={handlePaymentTypeChange}
          >
            <MenuItem value="PAYMENT_TYPE_TENANT_RENT">Tenant Rent</MenuItem>
            <MenuItem value="PAYMENT_TYPE_FEE_LATE">Late Fee</MenuItem>
            <MenuItem value="PAYMENT_TYPE_FEE_PARKING">Parking Fee</MenuItem>
          </Select>
        </FormControl>
      </div>
      <p>Has Axios</p>
      <p>Mock Card Number</p>
      <p>5105 1051 0510 5100</p>
      <SquarePaymentsForm
        applicationId={PAYMENT_CONFIG_APP_ID}
        locationId={PAYMENT_CONFIG_LOCATION_ID}
        cardTokenizeResponseReceived={async (token) =>
          await handleSubmitPayment(token, paymentType, paymentAmount)
        }
      >
        <CreditCardInput />
      </SquarePaymentsForm>
    </div>
  );
};

export { PaymentForm };
