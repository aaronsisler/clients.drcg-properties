import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useAppDispatch, useAppSelector } from "../../state-management";
import {
  decrementCurrentStep,
  incrementCurrentStep,
  selectCurrentStep,
} from "../../state-management/workflow-slice";

import styles from "./workflow-buttons.module.scss";

const WorkflowButtons = () => {
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector(selectCurrentStep);

  const increment = () => {
    dispatch(incrementCurrentStep());
  };

  const decrement = () => {
    dispatch(decrementCurrentStep());
  };

  return (
    <Stack spacing={4} direction="row" className={styles.workflowButtons}>
      <Button variant="outlined" onClick={decrement}>
        Previous
      </Button>
      <Button variant="outlined" onClick={increment}>
        Next
      </Button>
    </Stack>
  );
};

export { WorkflowButtons };
