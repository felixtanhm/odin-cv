import React from "react";
import Form from "../components/Form";
import ProfileDisplay from "../components/ProfileDisplay";

function App() {
  const [showForm, setShowForm] = React.useState("");
  const [profile, setProfile] = React.useState(null);

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
        <Form valueObj={profile} type={showForm} submitForm={setProfile} />
      )}
      <section id="resume">
        <p>Resume display</p>
        {profile && <ProfileDisplay profile={profile} />}
      </section>
    </>
  );
}

export default App;
