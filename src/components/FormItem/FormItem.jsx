import styles from "./FormItem.module.css";

function FormItem({ formItem, formType, toggleForm }) {
  if (formType === "profile") {
    return (
      <div className={styles["form-item"]}>
        <div>
          <p>
            <span>{formItem.name}</span>
          </p>
          <p>{formItem.email}</p>
          <div className={styles["form-item-line"]}>
            <a href={formItem.github}>Github</a>
            {" • "}
            <a href={formItem.linkedIn}>LinkedIn</a>
          </div>
          <p>{formItem.location}</p>
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
            <p>{formItem.startDate}</p>
            {" - "}
            <p>{formItem.endDate}</p>
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
            <p>{formItem.startDate}</p>
            {" - "}
            <p>{formItem.endDate}</p>
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
