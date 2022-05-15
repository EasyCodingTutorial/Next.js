import React from "react";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About Page</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi animi
        non asperiores quisquam assumenda quo nulla saepe ad ex quia
        voluptatibus placeat ipsa, a modi incidunt doloribus id unde pariatur?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
        dignissimos! Omnis dolor nihil eos iusto reprehenderit eligendi sunt,
        non optio cumque accusantium temporibus totam exercitationem! Itaque ad
        repudiandae consectetur omnis?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nam ratione in at ipsam perspiciatis, expedita, sint
        magni amet, accusantium libero mollitia non totam ut temporibus itaque
        quisquam aliquam? Consectetur, illo.
      </p>
    </div>
  );
}
