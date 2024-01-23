import React from "react";
import InputGroup from "../InputGroup";
import ButtonGroup from "../ButtonGroup";
import templateData from "../../templateData";

function Form({ formData, formType, submitForm, toggleForm }) {
  let setupData = {};
  if (formData) {
    setupData = formData;
  } else {
    for (const property in templateData[formType]) {
      setupData[property] = templateData[formType][property].default;
    }
  }

  const [formValue, setFormValue] = React.useState(setupData);

  function handleChange(e) {
    const newObj = { ...formValue, [e.target.name]: e.target.value };
    setFormValue(newObj);
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitForm(formValue, formType);
    toggleForm();
  }

  // Determine fields to generate in the form
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
            formType={formType}
          />
        );
      })}
      <ButtonGroup />
    </form>
  );
}

export default Form;
