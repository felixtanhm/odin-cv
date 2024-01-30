import { format } from "date-fns";
import styles from "./EducationDisplay.module.css";

function EducationDisplay({ educationList }) {
  return (
    <div>
      <h2 className={styles["display-title"]}>Education & Certifications</h2>
      {educationList.map((edu) => {
        return (
          <div key={edu.id} className={styles["edu-container"]}>
            <p className={styles["edu-title"]}>
              {edu.school} • {format(edu.startDate, "MMM yyyy")} -{" "}
              {format(edu.endDate, "MMM yyyy")}
            </p>
            <p className={styles["edu-description"]}>{edu.degree}</p>
          </div>
        );
      })}
    </div>
  );
}

export default EducationDisplay;
