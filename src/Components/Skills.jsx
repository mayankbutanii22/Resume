import React from "react";
import styles from "./Skills.module.css";

const Skills = ({ skills }) => {
  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
