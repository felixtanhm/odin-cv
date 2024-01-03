import Input from "./InputGroup";

function PersonalDetails({ name, email, phone, address, onChange }) {
  return (
    <>
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
      />
      <Input
        id="phone"
        type="input"
        labelText="Phone"
        placeholder=""
        value={phone}
        onChange={onChange}
      />
      <Input
        id="address"
        type="textarea"
        labelText="Address"
        placeholder="1 Parliament Drive"
        value={address}
        onChange={onChange}
      />
    </>
  );
}

export default PersonalDetails;
