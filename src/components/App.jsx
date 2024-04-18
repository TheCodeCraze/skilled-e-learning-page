import styles from "../styles/App.module.css";
import { Courses } from "./Courses";
import { Footer } from "./Footer";

export const App = () => {
  return (
    <div className={styles.container}>
      <Courses />
      <Footer />
    </div>
  );
};
