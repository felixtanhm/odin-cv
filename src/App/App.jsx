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
    formType: "",
    formData: null,
  });
  console.log(workList);
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

  function deleteItem(formValue, formType) {
    if (formType === "work") {
      const newArr = [...workList]
        .map((item) => {
          if (item.id !== formValue.id) return item;
        })
        .filter(Boolean);
      setWorkList(newArr);
      toggleForms();
    }
    if (formType === "education") {
      const newArr = [...educationList]
        .map((item) => {
          if (item.id !== formValue.id) return item;
        })
        .filter(Boolean);
      setEducationList(newArr);
      toggleForms();
    }
  }

  return (
    <>
      <section id="resume-builder">
        <div id="profile-form" className="section-container">
          <div>
            <h2>Profile Details</h2>
            {showForm.formType !== "profile" && profile === null && (
              <button
                className="btn-canvas"
                onClick={() => {
                  toggleForms("profile", profile);
                }}
              >
                Add Profile Details
              </button>
            )}
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
        <div id="work-form" className="section-container">
          <div className="title">
            <h2>Work Experience</h2>
            {showForm.formType !== "work" && (
              <button
                onClick={() => {
                  toggleForms("work", null);
                }}
              >
                Add New
              </button>
            )}
          </div>
          {showForm.formType === "work" && (
            <Form
              formData={showForm.formData}
              formType={showForm.formType}
              submitForm={submitForm}
              toggleForm={toggleForms}
              deleteItem={deleteItem}
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
        <div id="education-form" className="section-container">
          <div className="title">
            <h2>Education & Certifications</h2>
            {showForm.formType !== "education" && (
              <button
                onClick={() => {
                  toggleForms("education", null);
                }}
              >
                Add New
              </button>
            )}
          </div>
          {showForm.formType === "education" && (
            <Form
              formData={showForm.formData}
              formType={showForm.formType}
              submitForm={submitForm}
              toggleForm={toggleForms}
              deleteItem={deleteItem}
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
