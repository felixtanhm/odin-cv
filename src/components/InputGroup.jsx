function Input({ id, type, labelText, subtext, placeholder, value, onChange }) {
  return (
    <div className="input-group">
      <label htmlFor={id}>
        <span className="label-text">{labelText}</span>
        {subtext === "optional" && (
          <span className="optional-text">{subtext}</span>
        )}
        {subtext === "recommended" && (
          <span className="recommended-text">{subtext}</span>
        )}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
}

export default Input;
