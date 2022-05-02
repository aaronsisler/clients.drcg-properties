import React from "react";

import styles from "./workflow-buttons.module.scss";

const WorkflowButtons = ({ previousStep, nextStep }) => {
  return (
    <div>
      <p>
        <button onClick={previousStep}>Previous</button>
      </p>
      <p>
        <button onClick={nextStep}>Next</button>
      </p>
    </div>
  );
};

export { WorkflowButtons };
