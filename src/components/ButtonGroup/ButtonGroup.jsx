import styles from "./ButtonGroup.module.css";

function ButtonGroup({ onCancel, onDelete }) {
  return (
    <div className={styles["btn-group"]}>
      {onDelete && (
        <button type="button" className={styles["btn-del"]} onClick={onDelete}>
          Delete
        </button>
      )}
      <div className={styles["btn-right"]}>
        {onCancel && (
          <button
            type="button"
            className={styles["btn-cancel"]}
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
        <button type="submit">Save</button>
      </div>
    </div>
  );
}

export default ButtonGroup;
