import { useState } from "react";
import Button from "../components/Form/Button";
import Form from "../components/Form/Form";
import TextInput from "../components/Form/TextInput";

function ProductForm(props: any) {
  const { data, onSave } = props;
  const [details, setDetails] = useState(data);

  return (
    <Form
      onSubmit={() => {
        onSave(details);
      }}
    >
      <TextInput
        value={details.name}
        onValue={(name: string) => setDetails({ ...details, name })}
      />

      <TextInput
        value={details.year}
        onValue={(year: string) => setDetails({ ...details, year })}
      />

      <Button className="bgButtonPrimary ph3 pv2">Save</Button>
    </Form>
  );
}

export default ProductForm;
