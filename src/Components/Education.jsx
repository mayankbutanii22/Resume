import React from "react";
import styles from "./Education.module.css";

const Education = ({ education }) => {
  return (
    <section className={styles.education}>
      <h2>Education</h2>
      {education.map((edu, idx) => (
        <div key={idx} className={styles.item}>
          {edu.Study && <h3>{edu.Study}</h3>}
          {edu.school && <p className={styles.school}>{edu.school}</p>}
          {edu.description && <p>{edu.description}</p>}
          {edu.Course && <p className={styles.course}><strong>Course:</strong> {edu.Course}</p>}
        </div>
      ))}
    </section>
  );
};

export default Education;

