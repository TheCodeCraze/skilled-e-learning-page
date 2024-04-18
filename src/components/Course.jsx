import styles from "../styles/Course.module.css";
import PropTypes from "prop-types";

export const Course = ({ icon, title, description }) => {
  return (
    <div className={styles.course}>
      <img src={icon} alt={`Choose ${title} course`} className={styles.icon} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <a
        className={styles.cta}
        href="javascript:void(0)"
        aria-label="Click to start this animation course"
      >
        Get Started
      </a>
    </div>
  );
};

export const PopularCourse = ({ description }) => {
  return <div className={styles["popular-course"]}>{description}</div>;
};

Course.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

PopularCourse.propTypes = {
  description: PropTypes.string.isRequired,
};
