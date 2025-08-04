import React from "react";
import styles from "./Languages.module.css";

const Languages = ({ languages }) => {
  return (
    <section className={styles.languages}>
      <h2>Languages</h2>
      <ul>
        {languages.map((lang, idx) => (
          <li key={idx}>
            <span>{lang.name}</span>
            <div className={styles.bar}>
              <div
                className={styles.fill}
                style={{ width: `${lang.level * 20}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Languages;
