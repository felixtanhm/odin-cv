import React from "react";
import Form from "../components/Form";
import ProfileDisplay from "../components/ProfileDisplay";
import WorkDisplay from "../components/WorkDisplay";
import EducationDisplay from "../components/EducationDisplay";

function App() {
  const [profile, setProfile] = React.useState(null);
  const [workList, setWorkList] = React.useState([]);
  const [educationList, setEducationList] = React.useState([]);
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
    if (formType === "education") {
      const newArr = [...educationList, newObj];
      setEducationList(newArr);
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
        <div id="education-form">
          <div className="title">
            <h2>Education & Certifications</h2>
            <button
              onClick={() => {
                toggleForms("education", null);
              }}
            >
              Add New
            </button>
          </div>
          {showForm.formType === "education" && (
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
        {educationList.length > 0 && (
          <EducationDisplay educationList={educationList} />
        )}
      </section>
    </>
  );
}

export default App;
