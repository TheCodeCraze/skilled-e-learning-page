import styles from "../styles/Courses.module.css";
import { courseData } from "../data";
import { Course, PopularCourse } from "./Course";

export const Courses = () => {
  return (
    <section className={styles.courses}>
      {courseData &&
        courseData.map((item) =>
          item.popular ? (
            <PopularCourse key={item.id} description={item.description} />
          ) : (
            <Course
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          )
        )}
    </section>
  );
};
