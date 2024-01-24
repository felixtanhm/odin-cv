import React from "react";
import Form from "../components/Form";
import ProfileDisplay from "../components/ProfileDisplay";
import WorkDisplay from "../components/WorkDisplay";
import EducationDisplay from "../components/EducationDisplay";
import FormItem from "../components/FormItem";
import FormItemList from "../components/FormItemList";

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

  function submitForm(formValue, formType, isEdit) {
    if (formType === "profile") setProfile(formValue);
    if (formType === "work") {
      const newArr = isEdit
        ? workList.map((workItem) => {
            if (workItem.id === formValue.id) {
              return formValue;
            } else return workItem;
          })
        : [...workList, formValue];
      setWorkList(newArr);
    }
    if (formType === "education") {
      const newArr = isEdit
        ? educationList.map((eduItem) => {
            if (eduItem.id === formValue.id) {
              return formValue;
            } else return eduItem;
          })
        : [...educationList, formValue];
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
          {showForm.formType !== "profile" && profile !== null && (
            <FormItem
              formItem={profile}
              formType="profile"
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
          {workList.length > 0 && (
            <FormItemList
              itemList={workList}
              formType="work"
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
          {educationList.length > 0 && (
            <FormItemList
              itemList={educationList}
              formType="education"
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
