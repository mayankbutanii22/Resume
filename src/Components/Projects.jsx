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
              {proj.live && (
              <p className={styles.live}>
              <strong>Live : </strong>
              <a href={proj.live} target="_blank" rel="" className={styles.liveLink}>
              {proj.live}
              </a>
              </p>
            )}
            {proj.description && (
            <p className={styles.description}>{proj.description}</p>
            )}
        </div>
      ))}
    </section>
  );
};

export default Projects;
