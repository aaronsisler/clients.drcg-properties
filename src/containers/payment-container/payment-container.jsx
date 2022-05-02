import React, { useState } from "react";
import StepWizard from "react-step-wizard";

import { CustomerAddressInfo } from "../../components/customer-address-info";
import { CustomerContactInfo } from "../../components/customer-contact-info";
import { WorkflowButtons } from "../../components/workflow-buttons";
import { PaymentForm } from "../../components/payment-form";

import styles from "./payment-container.module.scss";

const PaymentContainer = () => {
  const [state, updateState] = useState({});
  const setInstance = (stepWizardInstance) =>
    updateState({
      ...state,
      stepWizardInstance,
    });

  const { stepWizardInstance } = state;
  return (
    <div className={styles.paymentContainer}>
      <StepWizard instance={setInstance}>
        <CustomerContactInfo />
        <CustomerAddressInfo />
        <PaymentForm isLazyMount={true} />
      </StepWizard>
      {stepWizardInstance && <WorkflowButtons {...stepWizardInstance} />}
    </div>
  );
};

export { PaymentContainer };
