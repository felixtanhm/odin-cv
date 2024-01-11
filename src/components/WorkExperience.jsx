import FormCard from "./FormCard";
import NewItemForm from "./NewItemForm";

function WorkExperience({ workList, displayForm, toggleDisplay }) {
  return (
    <FormCard type="Experience">
      {displayForm && <NewItemForm type="work"></NewItemForm>}
      {!displayForm && (
        <button onClick={() => toggleDisplay({})}>Add New Experience</button>
      )}
    </FormCard>
  );
}

export default WorkExperience;
