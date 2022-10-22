import React, { useState } from "react";
import "./style/authorForm.scss";
import { Grid } from "@mui/material";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";

const initialFValues = {
  id: 0,
  name: "",
};

const AuthorForm = () => {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const validationOnChange = true;

  const validation = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required";

    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (validationOnChange) validation({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      // addOrEdit(values, resetForm);
    }
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };

  return (
    <div className="container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Grid container className="gridInput">
          <Grid item xs={6} className="grid">
            <Input
              className="size"
              name="name"
              label="Field name"
              value={values.name}
              onChange={handleInputChange}
              error={errors.name}
            />
          </Grid>

          <Grid item xs={6} className="grid">
            <div className="btn" >
              <Button
                type="submit"
                size="small"
                text="Submit"
                className="submit"
              />

              <Button
                text="Reset"
                size="small"
                className="reset"
                onClick={resetForm}
              />
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AuthorForm;
