import React from "react";
import InputGroup from "../InputGroup";
import ButtonGroup from "../ButtonGroup";

function Form({ valueObj }) {
  const [formValue, setFormValue] = React.useState(valueObj);
  console.log("Form Rendered with Value: ");
  console.log(formValue);

  function handleChange(e) {
    const newObj = { ...formValue, [e.target.name]: e.target.value };
    setFormValue(newObj);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted: ");
    console.log(formValue);
    setFormValue({ name: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup
        name="name"
        labelText="Name"
        placeholder="Enter your full name"
        value={formValue.name}
        onChange={handleChange}
        type="text"
      />
      <ButtonGroup />
    </form>
  );
}

export default Form;
