import React, { useState } from "react";
import axios from "axios";

import { CustomerForm } from "../../components/customer-form";
import { PaymentForm } from "../../components/payment-form";
import {
  SERVICES_GATEWAY_URL,
  PAYMENT_CONFIG_TOKEN_CLIENT_NAME,
} from "../../config";

import styles from "./payment-container.module.scss";

const headers = {
  "Content-Type": "application/json",
  "X-Access-Token-Client": PAYMENT_CONFIG_TOKEN_CLIENT_NAME,
};

const options = { headers };

const address = {
  addressLine1: "123 Main Street",
  locality: "Holly Springs",
  administrativeDistrictLevel1: "NC",
  postalCode: "27540",
};

const customerInfo = {
  givenName: "Johnny",
  familyName: "Appleseed",
  companyName: "Place on the third floor",
  emailAddress: "my.email.address@gmail.com",
  phoneNumber: "910-603-0099",
  address,
};

const handlePaymentApiRequest = async (
  token,
  paymentType,
  paymentAmount = 456
) => {
  try {
    console.log(token);
    console.log(paymentType);
    console.log(paymentAmount);
    // return await axios.post(
    //   `${SERVICES_GATEWAY_URL}/payment`,
    //   {
    //     sourceId: token.token,
    //     amount: paymentAmount,
    //     customerInfo,
    //     note: paymentType,
    //   },
    //   options
    // );
  } catch (e) {
    console.log(e);
  }
};

const PaymentContainer = () => {
  const [customerInfo, setCustomerInfo] = useState({});

  return (
    <div className={styles.paymentContainer}>
      <CustomerForm />
      <PaymentForm handleSubmitPayment={handlePaymentApiRequest} />
    </div>
  );
};

export { PaymentContainer };
