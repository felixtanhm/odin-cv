import Input from "./InputGroup";

function PersonalDetails({
  name,
  email,
  github,
  linkedin,
  location,
  onChange,
}) {
  return (
    <div className="card">
      <h1>Personal Details</h1>
      <Input
        id="name"
        type="input"
        labelText="Full Name"
        placeholder="John Doe"
        value={name}
        onChange={onChange}
      />
      <Input
        id="email"
        type="input"
        labelText="Email"
        placeholder="john@google.com"
        value={email}
        onChange={onChange}
        subtext="recommended"
      />
      <Input
        id="github"
        type="input"
        labelText="Github"
        placeholder="https://github.com/yourusername"
        value={github}
        onChange={onChange}
        subtext="recommended"
      />
      <Input
        id="linkedin"
        type="input"
        labelText="LinkedIn"
        placeholder="https://linkedin.com/in/yourusername"
        value={linkedin}
        onChange={onChange}
        subtext="recommended"
      />
      <Input
        id="location"
        type="input"
        labelText="Location"
        placeholder="Tokyo, Japan"
        value={location}
        onChange={onChange}
        subtext="recommended"
      />
    </div>
  );
}

export default PersonalDetails;
