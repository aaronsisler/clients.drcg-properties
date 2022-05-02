import React from "react";

import { CustomerAddressInfo } from "../customer-address-info";
import { CustomerContactInfo } from "../customer-contact-info";

import styles from "./customer-form.module.scss";

const CustomerForm = ({ previousStep, nextStep }) => {
  return (
    <div className={styles.customerForm}>
      <CustomerContactInfo />
      <CustomerAddressInfo />
      <p>
        <button onClick={nextStep}>Next</button>
      </p>
    </div>
  );
};

export { CustomerForm };
