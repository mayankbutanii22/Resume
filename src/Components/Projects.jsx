import React from "react";
import styles from "./Projects.module.css";

const Projects = ({ projects }) => {
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      {projects.map((proj, idx) => (
        <div key={idx} className={styles.item}>
          <h3>{proj.title}</h3>
          <span className={styles.duration}>{proj.duration}</span>
          <ul>
            {proj.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Projects;
