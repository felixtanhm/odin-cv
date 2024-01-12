function ButtonGroup({ onCancel, onDelete }) {
  return (
    <div className="form-buttons">
      {onDelete && (
        <button className="btn-del" onClick={onDelete}>
          Delete
        </button>
      )}
      <div className="right-buttons">
        {onCancel && (
          <button value={null} onClick={onCancel}>
            Cancel
          </button>
        )}
        <button type="submit">Save</button>
      </div>
    </div>
  );
}

export default ButtonGroup;
