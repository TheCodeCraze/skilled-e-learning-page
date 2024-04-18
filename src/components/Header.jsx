import styles from "../styles/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/logo-dark.svg" alt="Home" className={styles.logo} />
      <button className={styles.cta}>Get Started</button>
    </header>
  );
};
