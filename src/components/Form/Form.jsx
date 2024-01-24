import React from "react";
import InputGroup from "../InputGroup";
import ButtonGroup from "../ButtonGroup";
import templateData from "../../templateData";

function Form({ formData, formType, submitForm, toggleForm }) {
  let setupData = {};
  const reactId = React.useId();
  if (formData) {
    setupData = formData;
  } else {
    setupData.id = reactId;
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
    submitForm(formValue, formType, !!formData);
    toggleForm();
  }

  // Determine fields to generate in the form
  const fieldsArr = [];
  for (const property in formValue) {
    if (property !== "id") fieldsArr.push(property);
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
