import styles from "./FormItem.module.css";
import { format } from "date-fns";

function FormItem({ formItem, formType, toggleForm }) {
  if (formType === "profile") {
    return (
      <div className={styles["form-item"]}>
        <div>
          <p>
            <span>{formItem.name}</span>
          </p>
          <p>{formItem.email}</p>
          {(formItem?.github || formItem?.linkedIn) && (
            <div className={styles["form-item-line"]}>
              {formItem?.github && <a href={formItem.github}>Github</a>}
              {formItem?.linkedIn && (
                <a href={formItem.linkedIn}>{" • "}LinkedIn</a>
              )}
            </div>
          )}

          {formItem?.location && <p>{formItem.location}</p>}
        </div>
        <button
          className="btn-secondary"
          onClick={() => {
            toggleForm(formType, formItem);
          }}
        >
          Edit
        </button>
      </div>
    );
  }
  if (formType === "work") {
    return (
      <div className={styles["form-item"]}>
        <div>
          <p>
            <span>{formItem.title + ", " + formItem.company}</span>
          </p>
          <div className={styles["form-item-line"]}>
            <p>{format(formItem.startDate, "MMM yyyy")}</p>
            {" - "}
            <p>
              {formItem?.endDate
                ? format(formItem.endDate, "MMM yyyy")
                : "Present"}
            </p>
          </div>
        </div>
        <button
          className="btn-secondary"
          onClick={() => {
            toggleForm(formType, formItem);
          }}
        >
          Edit
        </button>
      </div>
    );
  }
  if (formType === "education") {
    return (
      <div className={styles["form-item"]}>
        <div>
          <p>
            <span>{formItem.school}</span>
          </p>
          <p>{formItem.degree}</p>
          <div className={styles["form-item-line"]}>
            <p>{format(formItem.startDate, "MMM yyyy")}</p>
            {" - "}
            <p>
              {formItem?.endDate
                ? format(formItem.endDate, "MMM yyyy")
                : "Present"}
            </p>
          </div>
        </div>
        <button
          className="btn-secondary"
          onClick={() => {
            toggleForm(formType, formItem);
          }}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default FormItem;
