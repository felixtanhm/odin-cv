import { useState } from "react";
import Profile from "./components/Profile";
import templateData from "./templateData";

function App() {
  const [profile, setProfile] = useState(templateData.profile);
  const [educationList, setEducationList] = useState([]);
  const [workList, setWorkList] = useState([]);
  const [activeForm, setActiveForm] = useState(null);

  function editForm(e) {
    const formId = e.target.value;
    setActiveForm(formId);
  }

  function saveEntry(obj) {
    setProfile(obj);
    setActiveForm(null);
  }

  return (
    <div className="form-section">
      <Profile
        profile={profile}
        isFormActive={activeForm}
        toggleForm={editForm}
        saveProfile={saveEntry}
      ></Profile>
    </div>
  );
}

export default App;
