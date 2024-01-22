function ButtonGroup({ onCancel, onDelete }) {
  return (
    <div className="button-group">
      {onDelete && (
        <button className="btn-del" onClick={onDelete}>
          Delete
        </button>
      )}
      <div className="button-right">
        {onCancel && (
          <button className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        )}
        <button className="btn-save">Save</button>
      </div>
    </div>
  );
}

export default ButtonGroup;
