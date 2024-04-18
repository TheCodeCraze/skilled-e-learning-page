import styles from "../styles/Hero.module.css";
import { Header } from "./Header";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Header />
      <div className={styles.text}>
        <h1 className={styles.title}>Maximize skill, minimize budget</h1>
        <p className={styles.description}>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button className={styles.cta} aria-label="Click to join courses">
          Get Started
        </button>
      </div>
      <img
        src="/image-hero-desktop.png"
        alt="Hero section illustration"
        className={styles.image}
      />
    </section>
  );
};
