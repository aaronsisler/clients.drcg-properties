import React from "react";
import {
  CreditCardInput,
  SquarePaymentsForm,
} from "react-square-web-payments-sdk";

import {
  PAYMENT_CONFIG_APP_ID,
  PAYMENT_CONFIG_LOCATION_ID,
} from "../../config";

import styles from "./payment-form.module.scss";

const PaymentForm = ({ handlePayment }) => (
  <div className={styles.paymentForm}>
    <p>Has Axios</p>
    <p>Mock Card Number</p>
    <p>5105 1051 0510 5100</p>
    <SquarePaymentsForm
      applicationId={PAYMENT_CONFIG_APP_ID}
      locationId={PAYMENT_CONFIG_LOCATION_ID}
      cardTokenizeResponseReceived={async (token) => await handlePayment(token)}
    >
      <CreditCardInput />
    </SquarePaymentsForm>
  </div>
);

export { PaymentForm };
