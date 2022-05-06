import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useAppDispatch, useAppSelector } from "../../state-management";
import {
  decrementCurrentStep,
  selectCurrentStep,
} from "../../state-management/workflow-slice";

import styles from "./workflow-buttons.module.scss";

const WorkflowButtons = ({ goToNextStep }) => {
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector(selectCurrentStep);
  const enablePrevious = currentStep > 0;

  return (
    <Stack spacing={4} direction="row" className={styles.workflowButtons}>
      {enablePrevious && (
        <Button
          variant="outlined"
          type="submit"
          onClick={() => dispatch(decrementCurrentStep())}
        >
          Previous
        </Button>
      )}
      {goToNextStep && (
        <Button variant="outlined" type="submit" onClick={goToNextStep}>
          Next
        </Button>
      )}
    </Stack>
  );
};

export { WorkflowButtons };
