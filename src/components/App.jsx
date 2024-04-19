import styles from "../styles/App.module.css";
import { Hero } from "./Hero";
import { Courses } from "./Courses";
import { Footer } from "./Footer";

export const App = () => {
  return (
    <main className={styles.container}>
      <Hero />
      <Courses />
      <Footer />
    </main>
  );
};
