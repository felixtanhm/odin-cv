import { useState } from "react";
import InputGroup from "./InputGroup";
import ButtonGroup from "./ButtonGroup";

function Profile({ profile, isFormActive, toggleForm, saveProfile }) {
  // const blankProfile = {
  //   fullName: "",
  //   email: "",
  //   github: "",
  //   linkedIn: "",
  //   location: "",
  // };
  const [formValue, setFormValue] = useState(profile);

  function handleInputChange(e) {
    const key = e.target.id;
    const value = e.target.value;

    setFormValue({ ...formValue, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    saveProfile(formValue);
    // setFormValue(blankProfile);
  }

  return (
    <div className="card">
      <div className="card-header">
        <h1>Profile Details</h1>
        <button
          value="profile"
          onClick={toggleForm}
          disabled={isFormActive === "profile"}
        >
          Edit
        </button>
      </div>
      {isFormActive === "profile" && (
        <form onSubmit={handleSubmit}>
          <InputGroup
            id="fullName"
            type="input"
            labelText="Full Name"
            placeholder="Enter your full name"
            value={formValue.fullName}
            onChange={handleInputChange}
          />
          <InputGroup
            id="email"
            type="input"
            labelText="Email"
            placeholder="Enter your email"
            value={formValue.email}
            onChange={handleInputChange}
          />
          <InputGroup
            id="github"
            type="input"
            labelText="Github"
            placeholder="Enter your github profile url"
            value={formValue.github}
            onChange={handleInputChange}
          />
          <InputGroup
            id="linkedIn"
            type="input"
            labelText="LinkedIn"
            placeholder="Enter your linkedIn profile url"
            value={formValue.linkedIn}
            onChange={handleInputChange}
          />
          <InputGroup
            id="location"
            type="input"
            labelText="Location"
            placeholder="Enter your location"
            value={formValue.location}
            onChange={handleInputChange}
          />
          <ButtonGroup onCancel={toggleForm}></ButtonGroup>
        </form>
      )}

      <div className="card-item">
        <h3>{profile.fullName}</h3>
        <p>{profile.email}</p>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <p>{profile.location}</p>
      </div>
    </div>
  );
}

export default Profile;
