import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { WorkflowStepOrder } from "../../state-management/workflow-slice";

import styles from "./workflow-stepper.module.scss";

const WorkflowStepper = ({ activeStep = 1 }) => {
  const length = Object.values(WorkflowStepOrder).length;
  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      className={styles.workflowStepper}
    >
      {Object.values(WorkflowStepOrder).map((label, index) => {
        const stepProps: { completed?: boolean } = {
          completed: activeStep >= index + 1 || activeStep + 1 == length,
        };
        return (
          <Step key={label} {...stepProps}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export { WorkflowStepper };
