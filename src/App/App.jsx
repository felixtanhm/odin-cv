import React from "react";
import Form from "../components/Form";

function App() {
  const [showForm, setShowForm] = React.useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        Show Form
      </button>
      {showForm && <Form valueObj={{ name: "Felix Tan" }} />};
    </>
  );
}

export default App;
