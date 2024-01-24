function FormItem({ formItem, formType, toggleForm }) {
  if (formType === "profile") {
    return (
      <div>
        <div>
          <p>{formItem.name}</p>
          <p>{formItem.email}</p>
          <div className="form-item-line">
            <p>{formItem.github}</p>
            <p>{formItem.linkedin}</p>
          </div>
          <p>{formItem.location}</p>
        </div>
        <button
          className="btn-edit"
          onClick={() => {
            toggleForm(formType, formItem);
          }}
        >
          Edit
        </button>
      </div>
    );
  }
  if (formType === "work") {
    return (
      <div>
        <div>
          <p>{formItem.title}</p>
          <p>{formItem.company}</p>
          <div className="form-item-line">
            <p>{formItem.startDate}</p>
            <p>{formItem.endDate}</p>
          </div>
        </div>
        <button
          className="btn-edit"
          onClick={() => {
            toggleForm(formType, formItem);
          }}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default FormItem;
