import { format } from "date-fns";
import styles from "./WorkDisplay.module.css";

function WorkDisplay({ workList }) {
  return (
    <div>
      <h2 className={styles["display-title"]}>Work Experience</h2>
      {workList.map((work) => {
        return (
          <div key={work.id} className={styles["work-container"]}>
            <p className={styles["work-title"]}>
              {work.title}, {work.company} •{" "}
              {format(work.startDate, "MMM yyyy")} -{" "}
              {work?.endDate ? format(work.endDate, "MMM yyyy") : "Present"}
            </p>
            <p className={styles["work-description"]}>{work.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default WorkDisplay;
