import React from "react";

import { CustomerAddressInfo } from "../customer-address-info";
import { CustomerContactInfo } from "../customer-contact-info";

import styles from "./customer-form.module.scss";

const CustomerForm = () => {
  return (
    <div>
      <CustomerContactInfo />
      <CustomerAddressInfo />
    </div>
  );
};

export { CustomerForm };
