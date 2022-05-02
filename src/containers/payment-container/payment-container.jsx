import React from "react";

import { CustomerAddressInfo } from "../../components/customer-address-info";
import { CustomerContactInfo } from "../../components/customer-contact-info";
import { PaymentForm } from "../../components/payment-form";
import { PaymentSuccess } from "../../components/payment-success";

import { useAppSelector } from "../../state-management";
import {
  selectCurrentStep,
  WorkflowStep,
} from "../../state-management/workflow-slice";

import styles from "./payment-container.module.scss";

const PaymentContainer = () => {
  const currentStep = useAppSelector(selectCurrentStep);

  return (
    <div className={styles.paymentContainer}>
      {(() => {
        switch (currentStep) {
          case WorkflowStep.CUSTOMER_CONTACT_INFO:
            return <CustomerContactInfo />;
          case WorkflowStep.CUSTOMER_ADDRESS_INFO:
            return <CustomerAddressInfo />;
          case WorkflowStep.PAYMENT_CREDIT_CARD_INFO:
            return <PaymentForm />;
          case WorkflowStep.PAYMENT_SUCCESS:
            return <PaymentSuccess />;
        }
      })()}
    </div>
  );
};

export { PaymentContainer };
