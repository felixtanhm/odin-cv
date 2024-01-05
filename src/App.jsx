import { useState } from "react";
import templateData from "./templateData";
import PersonalDetails from "./components/PersonalDetails";
import PersonalDetailsDisplay from "./components/PersonalDetailsDisplay";
// import "./App.css";

function App() {
  const [personalDetails, setPersonalDetails] = useState(
    templateData.personalDetails
  );

  function handlePersonalDetailsChange(e) {
    const key = e.target.id;
    setPersonalDetails({ ...personalDetails, [key]: e.target.value });
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
