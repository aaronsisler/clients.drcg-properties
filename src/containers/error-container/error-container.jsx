import React from "react";

import styles from "./error-container.module.scss";

const ErrorContainer = () => (
  <div className={styles.error_container}>
    <h2 className={styles.error_container__title}>
      Rut roh....something went wrong.
    </h2>
  </div>
);

export default ErrorContainer;
