import React from "react";
import templateData from "../../templateData";
import utils from "../../utils.js";
import styles from "./InputGroup.module.css";

function InputGroup({ name, value, onChange, formType }, ref) {
  const reactId = React.useId();
  const formFields = templateData[formType];

  return (
    <div className={styles["input-group"]}>
      <label htmlFor={reactId}>
        <span className={styles["label-text"]}>{utils.capitalise(name)}</span>
        {formFields[name]?.subtext && (
          <span className={styles["sub-text"]}>
            {formFields[name]?.subtext}
          </span>
        )}
      </label>

      {formFields[name]?.type === "textarea" ? (
        <textarea
          id={reactId}
          ref={ref}
          name={name}
          placeholder={formFields[name].placeholder}
          value={value}
          onChange={onChange}
          required={formFields[name].required}
        ></textarea>
      ) : (
        <input
          id={reactId}
          ref={ref}
          name={name}
          placeholder={formFields[name].placeholder}
          value={value}
          onChange={onChange}
          type={formFields[name].type}
          required={formFields[name].required}
        />
      )}
    </div>
  );
}

export default React.forwardRef(InputGroup);
