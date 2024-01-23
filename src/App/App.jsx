import React from "react";
import Form from "../components/Form";
import ProfileDisplay from "../components/ProfileDisplay";
import WorkDisplay from "../components/WorkDisplay";

function App() {
  const [profile, setProfile] = React.useState(null);
  const [workList, setWorkList] = React.useState([]);
  const [showForm, setShowForm] = React.useState({
    formType: "profile",
    formData: null,
  });

  function toggleForms(formType, formData) {
    formType !== showForm.formType
      ? setShowForm({ formType: formType, formData: formData })
      : setShowForm({ formType: "", formData: null });
  }

  function submitForm(newObj, formType) {
    if (formType === "profile") setProfile(newObj);
    if (formType === "work") {
      const newArr = [...workList, newObj];
      setWorkList(newArr);
    }
  }

  return (
    <>
      <section id="resume-builder">
        <div id="profile-form">
          <div className="title">
            <h2>Profile Details</h2>
            <button
              onClick={() => {
                toggleForms("profile", profile);
              }}
            >
              Edit Profile
            </button>
          </div>
          {showForm.formType === "profile" && (
            <Form
              formData={showForm.formData}
              formType={showForm.formType}
              submitForm={submitForm}
              toggleForm={toggleForms}
            />
          )}
        </div>
        <div id="work-form">
          <div className="title">
            <h2>Work Experience</h2>
            <button
              onClick={() => {
                toggleForms("work", null);
              }}
            >
              Add New
            </button>
          </div>
          {showForm.formType === "work" && (
            <Form
              formData={showForm.formData}
              formType={showForm.formType}
              submitForm={submitForm}
              toggleForm={toggleForms}
            />
          )}
        </div>
      </section>
      <section id="resume-display">
        <p>Resume display</p>
        {profile && <ProfileDisplay profile={profile} />}
        {workList.length > 0 && <WorkDisplay workList={workList} />}
      </section>
    </>
  );
}

export default App;
