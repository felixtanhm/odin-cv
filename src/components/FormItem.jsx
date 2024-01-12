function FormItem({ name, onClick }) {
  return (
    <div onClick={onClick}>
      <h2>{name}</h2>
    </div>
  );
}

export default FormItem;
