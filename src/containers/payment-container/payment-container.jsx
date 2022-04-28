import React from "react";

import { CustomerForm } from "../../components/customer-form";
import { PaymentForm } from "../../components/payment-form";

import styles from "./payment-container.module.scss";

const PaymentContainer = () => {
  return (
    <div className={styles.paymentContainer}>
      <CustomerForm />
      <PaymentForm />
    </div>
  );
};

export { PaymentContainer };
