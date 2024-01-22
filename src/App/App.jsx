import React from "react";
import Form from "../components/Form";

function App() {
  const [showForm, setShowForm] = React.useState("");

  return (
    <>
      <button
        onClick={() => {
          showForm ? setShowForm("") : setShowForm("profile");
        }}
      >
        Show Form
      </button>
      {showForm === "profile" && <Form valueObj={null} type={showForm} />};
    </>
  );
}

export default App;
