import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>
          Multi-page website using Next.js | Easy Coding
        </h2>

        <div className={styles.grid}>
          <Link href="/">
            <a className={styles.card}>
              <h2>Home &rarr;</h2>
            </a>
          </Link>

          <Link href="/about">
            <a className={styles.card}>
              <h2>About &rarr;</h2>
            </a>
          </Link>

          <Link href="/contact">
            <a className={styles.card}>
              <h2>Contact &rarr;</h2>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
