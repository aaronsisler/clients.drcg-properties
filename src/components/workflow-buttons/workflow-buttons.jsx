import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useAppDispatch } from "../../state-management";
import { decrementCurrentStep } from "../../state-management/workflow-slice";

import styles from "./workflow-buttons.module.scss";

const WorkflowButtons = ({ goToNextStep }) => {
  const dispatch = useAppDispatch();

  return (
    <Stack spacing={4} direction="row" className={styles.workflowButtons}>
      <Button
        variant="outlined"
        type="submit"
        onClick={() => dispatch(decrementCurrentStep())}
      >
        Previous
      </Button>
      {goToNextStep && (
        <Button variant="outlined" type="submit" onClick={goToNextStep}>
          Next
        </Button>
      )}
    </Stack>
  );
};

export { WorkflowButtons };
