import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Summary from "./Summary";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";
import Languages from "./Languages";
import Contact from "./Contact";
import styles from "./Resume.module.css";

const Resume = () => {
  const resume = useSelector((state) => state.resume);

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <img
          src="/1000015783[1].jpg"
          alt={resume.name}
          className={styles.profileImg}
        />
        <Contact contact={resume.contact} />
        <Skills skills={resume.skills} />
        <Languages languages={resume.languages} />
      </aside>

      <main className={styles.content}>
        <Header name={resume.name} title={resume.title} />
        <Summary summary={resume.summary} />
        <Projects projects={resume.projects} />
        <Education education={resume.education} />
      </main>
    </div>
  );
};

export default Resume;
