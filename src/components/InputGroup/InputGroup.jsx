import React from "react";
import templateData from "../../templateData";
import utils from "../../utils.js";

function InputGroup({ name, value, onChange, type }) {
  const reactId = React.useId();
  const formFields = templateData[type];

  return (
    <div className="input-group">
      <label htmlFor={reactId}>
        <span className="label-text">{utils.capitalise(name)}</span>
        {formFields[name]?.subtext && (
          <span className="sub-text">{formFields[name]?.subtext}</span>
        )}
      </label>

      {type === "textarea" ? (
        <textarea
          id={reactId}
          name={name}
          placeholder={formFields[name].placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          id={reactId}
          name={name}
          placeholder={formFields[name].placeholder}
          value={value}
          onChange={onChange}
          type={formFields[name].type}
        />
      )}
    </div>
  );
}

export default InputGroup;
