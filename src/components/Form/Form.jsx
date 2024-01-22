import React from "react";
import InputGroup from "../InputGroup";
import ButtonGroup from "../ButtonGroup";

// {
//   name: "",
//   email: "",
//   github: ""
// }

function Form({ valueObj, type }) {
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
    setFormValue({ name: "", email: "" });
  }

  const fieldsArr = [];
  for (const property in valueObj) {
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
