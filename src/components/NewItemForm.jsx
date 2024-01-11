import Input from "./InputGroup";

function NewItemForm({ type, onChange, onSave }) {
  if (type === "work") {
    return (
      <div className="card">
        <Input
          id="title"
          type="input"
          labelText="Position Title"
          placeholder="Enter position title"
          onChange={onChange}
        />
        <Input
          id="company"
          type="input"
          labelText="Company Name"
          placeholder="Enter company name"
          onChange={onChange}
        />
        <button onClick={onSave}>Save</button>
      </div>
    );
  } else
    return (
      <div className="card">
        <Input
          id="school"
          type="input"
          labelText="School"
          placeholder="Enter school / university"
          onChange={onChange}
        />
        <Input
          id="degree"
          type="input"
          labelText="Degree"
          placeholder="Enter degree / field of study"
          onChange={onChange}
        />
      </div>
    );
}

export default NewItemForm;
