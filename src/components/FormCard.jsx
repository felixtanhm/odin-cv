function FormCard({ type, children }) {
  return (
    <div className="card">
      <h1>{type}</h1>
      {children}
    </div>
  );
}

export default FormCard;
