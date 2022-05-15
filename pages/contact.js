import React from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact Page</h2>
      <div className={styles.details}>
        <li className={styles.list}>
          <label className={styles.label}>Name:</label>
          <p className={styles.value}>Easy coding</p>
        </li>
        <li className={styles.list}>
          <label className={styles.label}>Email:</label>
          <p className={styles.value}>ecoding45gmail.com</p>
        </li>
      </div>
    </div>
  );
}
