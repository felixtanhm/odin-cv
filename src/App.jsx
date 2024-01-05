import { useState } from "react";
import templateData from "./templateData";
import PersonalDetails from "./components/PersonalDetails";
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
      <PersonalDetails
        name={personalDetails.name}
        email={personalDetails.email}
        phone={personalDetails.phone}
        address={personalDetails.address}
        onChange={handlePersonalDetailsChange}
      />
    </>
  );
}

export default App;
