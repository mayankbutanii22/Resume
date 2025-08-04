import React from "react";
import styles from "./Summary.module.css";

const Summary = ({ summary }) => {
  return (
    <section className={styles.summary}>
      <h2>Summary</h2>
      <ul>
        {summary.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
    </section>
  );
};

export default Summary;
