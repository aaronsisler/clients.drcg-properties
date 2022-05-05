import React from "react";

import styles from "./payment-success.module.scss";

const PaymentSuccess = () => (
  <div className={styles.paymentSuccess}>
    <p className={styles.paymentSuccess__message}>
      Your payment was processed successfully. You may close this window now.
    </p>
  </div>
);

export { PaymentSuccess };
