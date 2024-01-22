import React from "react";
import Form from "../components/Form";
import templateData from "../templateData";

function App() {
  const [showForm, setShowForm] = React.useState("");

  function setupTemplateData() {
    const profileData = {};
    for (const property in templateData.profile) {
      profileData[property] = templateData.profile[property].default;
    }

    return { profileData };
  }

  const generatedTemplateData = setupTemplateData();
  console.log("Generated Template Data");
  console.log(generatedTemplateData.profileData);

  return (
    <>
      <button
        onClick={() => {
          showForm ? setShowForm("") : setShowForm("profile");
        }}
      >
        Show Form
      </button>
      {showForm === "profile" && (
        <Form valueObj={generatedTemplateData.profileData} type={showForm} />
      )}
      ;
    </>
  );
}

export default App;
