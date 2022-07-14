import css from "classnames";

import { useState } from "react";

import Button from "../components/Form/Button";
import Form from "../components/Form/Form";
import TextInput from "../components/Form/TextInput";

function ProductForm(props: any) {
  const { data, onSave, className } = props;
  const [details, setDetails] = useState(data);
  const [isLoading, setLoading] = useState(false);
  return (
    <Form
      onSubmit={async () => {
        setLoading(true)
        await onSave(details);
        setLoading(false)
      }}
      className={css(className, "flex items-end")}
    >
      <div>
        <label htmlFor="input-movie-name">Movie Name</label>
        <TextInput
          id="input-movie-name"
          value={details.name}
          onValue={(name: string) => setDetails({ ...details, name })}
          className="ph3 pv2 mt2 db"
        />
      </div>

      <div className="ml4">
        <label htmlFor="input-movie-name">Movie Year</label>
        <TextInput
          id="input-movie-year"
          value={details.year}
          onValue={(year: string) => setDetails({ ...details, year })}
          className="ph3 pv2 mt2 db"
        />
      </div>

      <Button className="bgButtonPrimary ph3 pv2 ml4" isLoading={isLoading}>Save</Button>
    </Form>
  );
}

export default ProductForm;
