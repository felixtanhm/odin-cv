import React from "react";
import InputGroup from "../InputGroup";
import ButtonGroup from "../ButtonGroup";
import templateData from "../../templateData";

function Form({ valueObj, type, submitForm }) {
  let setupData = {};
  if (valueObj) {
    setupData = valueObj;
  } else {
    for (const property in templateData[type]) {
      setupData[property] = templateData[type][property].default;
    }
  }

  const [formValue, setFormValue] = React.useState(setupData);

  function handleChange(e) {
    const newObj = { ...formValue, [e.target.name]: e.target.value };
    setFormValue(newObj);
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitForm(formValue);
    console.log("Form Submitted: ");
    console.log(formValue);
    setFormValue({ name: "", email: "" });
  }

  const fieldsArr = [];
  for (const property in formValue) {
    fieldsArr.push(property);
  }

  return (
    <form onSubmit={handleSubmit}>
      {fieldsArr.map((field) => {
        return (
          <InputGroup
            key={field}
            name={field}
            value={formValue[field]}
            onChange={handleChange}
            type={type}
          />
        );
      })}
      <ButtonGroup />
    </form>
  );
}

export default Form;
