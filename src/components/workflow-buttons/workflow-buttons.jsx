import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useAppDispatch } from "../../state-management";
import {
  decrementCurrentStep,
  incrementCurrentStep,
} from "../../state-management/workflow-slice";

import styles from "./workflow-buttons.module.scss";

const WorkflowButtons = ({ goToNextStep, goToPreviousStep }) => {
  const dispatch = useAppDispatch();

  const decrement = () => {
    dispatch(decrementCurrentStep());
  };

  return (
    <Stack spacing={4} direction="row" className={styles.workflowButtons}>
      <Button variant="outlined" type="submit" onClick={goToPreviousStep}>
        Previous
      </Button>
      <Button variant="outlined" type="submit" onClick={goToNextStep}>
        Next
      </Button>
    </Stack>
  );
};

export { WorkflowButtons };
