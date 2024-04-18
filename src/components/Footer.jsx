import styles from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src="/logo-light.svg" alt="Home" className={styles.logo} />
      <button className={styles.cta}>Get Started</button>
    </footer>
  );
};
