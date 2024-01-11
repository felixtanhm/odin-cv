import { useState } from "react";
import templateData from "./templateData";
import PersonalDetails from "./components/PersonalDetails";
import PersonalDetailsDisplay from "./components/PersonalDetailsDisplay";
import NewItemForm from "./components/NewItemForm";
import WorkExperience from "./components/WorkExperience";
// import "./App.css";

function App() {
  const [personalDetails, setPersonalDetails] = useState(
    templateData.personalDetails
  );
  const [pendingItem, setPendingItem] = useState(null);
  console.log(pendingItem);
  const [workExperiences, setWorkExperiences] = useState(
    templateData.workExperiences
  );
  console.log(workExperiences);

  function handlePersonalDetailsChange(e) {
    const key = e.target.id;
    setPersonalDetails({ ...personalDetails, [key]: e.target.value });
  }

  function createWorkExperiences() {
    setWorkExperiences([
      ...workExperiences,
      { ...pendingItem, id: workExperiences.length },
    ]);
  }

  function updateWorkExperiences(e) {
    // Update workExperience object currently in list of work experiences
  }
  function deleteWorkExperiences(e) {
    // Remove workExperience object currently in list of work experiences
  }
  function handlePendingItemChange(e) {
    const key = e.target.id;
    setPendingItem({ ...pendingItem, [key]: e.target.value });
  }

  return (
    <>
      <div id="form">
        <PersonalDetails
          name={personalDetails.name}
          email={personalDetails.email}
          github={personalDetails.github}
          linkedin={personalDetails.linkedin}
          location={personalDetails.location}
          onChange={handlePersonalDetailsChange}
        />
        <WorkExperience
          workList={templateData.workExperiences}
          displayForm={pendingItem}
          toggleDisplay={setPendingItem}
        ></WorkExperience>
        <NewItemForm
          type="work"
          onChange={handlePendingItemChange}
          onSave={createWorkExperiences}
        />
      </div>
      <div id="resume-display">
        <PersonalDetailsDisplay
          name={personalDetails.name}
          email={personalDetails.email}
          github={personalDetails.github}
          linkedin={personalDetails.linkedin}
          location={personalDetails.location}
        />
      </div>
    </>
  );
}

export default App;
