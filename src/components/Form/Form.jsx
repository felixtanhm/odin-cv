import React from "react";
import InputGroup from "../InputGroup";
import ButtonGroup from "../ButtonGroup";
import templateData from "../../templateData";

function Form({ formData, formType, submitForm, toggleForm, deleteItem }) {
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

  const firstInput = React.useRef();

  React.useEffect(() => {
    firstInput.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      {fieldsArr.map((field, index) => {
        if (index === 0)
          return (
            <InputGroup
              key={field}
              ref={firstInput}
              name={field}
              value={formValue[field]}
              onChange={handleChange}
              formType={formType}
            />
          );
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
      <ButtonGroup
        onCancel={toggleForm}
        onDelete={
          formData
            ? () => {
                deleteItem(formValue, formType);
              }
            : undefined
        }
      />
    </form>
  );
}

export default Form;
