import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./payment-processing-modal.module.scss";

const PaymentProcessingModal = ({ isOpen }) => (
  <Modal open={isOpen}>
    <div className={styles.paymentProcessingModal}>
      <p className={styles.paymentProcessingModal__text}>
        Processing Payment...
      </p>
      <CircularProgress className={styles.paymentProcessingModal__spinner} />
    </div>
  </Modal>
);

export { PaymentProcessingModal };
