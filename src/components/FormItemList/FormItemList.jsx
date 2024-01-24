import FormItem from "../FormItem/FormItem";

function FormItemList({ itemList, formType, toggleForm }) {
  return (
    <div>
      {itemList.map((item) => {
        return (
          <FormItem
            key={item.id}
            formItem={item}
            formType={formType}
            toggleForm={toggleForm}
          />
        );
      })}
    </div>
  );
}

export default FormItemList;
