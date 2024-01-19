import React from "react";

function InputGroup({
  name,
  labelText,
  subtext,
  placeholder,
  value,
  onChange,
  type,
}) {
  const reactId = React.useId();

  return (
    <div className="input-group">
      <label htmlFor={reactId}>
        <span className="label-text">{labelText}</span>
        {subtext && <span className="sub-text">{subtext}</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={reactId}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          id={reactId}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={type}
        />
      )}
    </div>
  );
}

export default InputGroup;
