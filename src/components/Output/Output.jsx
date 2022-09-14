import React from "react";
import styles from "./output.module.css";

const Output = ({ city, temp, state }) => {
  return (
    <div className={styles.outputContainer}>
      <div className={styles.outputContainerLeft}>
        <p className={styles.outputContainerLeftparagraph}> {city}  </p>
        <h1 className={styles.outputContainerLeftheader1}>{temp}  </h1>
      </div>
      <div className={styles.outputContainerRight}>
        <p> {state}</p>
      </div>
    </div>
  );
};

export default Output;
