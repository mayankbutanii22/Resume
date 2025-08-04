import React from "react";
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
  return (
    <section className={styles.contact}>
      <h2>Contact</h2>
      <ul>
        {contact.email && <li><strong>Email :</strong> {contact.email}</li>}
        {contact.phone && <li><strong>Phone :</strong> {contact.phone}</li>}
        {contact.Address && <li><strong>Address :</strong> {contact.Address}</li>}
        
        {contact.GitHub && (
          <li>
            <strong>GitHub :</strong>{" "}
            <a href={contact.GitHub} target="_blank" rel="noreferrer">
              {contact.GitHub}
            </a>
          </li>
        )}
        
        {contact.Vercel && (
          <li>
            <strong>Vercel :</strong>{" "}
            <a href={contact.Vercel} target="_blank" rel="noreferrer">
              {contact.Vercel}
            </a>
          </li>
        )}
        
        {contact.Linkedin && (
          <li>
            <strong>Linkedin :</strong>{" "}
            <a href={contact.Linkedin} target="_blank" rel="noreferrer">
              {contact.Linkedin}
            </a>
          </li>
        )}
      </ul>
    </section>
  );
};

export default Contact;

