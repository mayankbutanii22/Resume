import React from "react";
import styles from "./Header.module.css";

const Header = ({ name, title }) => {
  return (
    <div className={styles.header}>
      <h1>{name}</h1>
      <h3>{title}</h3>
    </div>
  );
};

export default Header;
