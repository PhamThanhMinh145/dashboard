import React, { useState } from "react";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Grid } from "@mui/material";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import "./style/publisherForm.scss";

const initialFValues = {
  id: 0,
  image: "",
  name: "",
  address: "",
};

const PublisherForm = () => {

  const [file, setFile] = useState("");
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
        <Grid container className="grid">
          <div className="gridInput">
            <div>
              <Input
              className="size"
                name="name"
                label="Publisher name"
                value={values.name}
                onChange={handleInputChange}
                error={errors.name}
              />
            </div>

            <div>
              <Input
              className="size"
                name="address"
                label="Address"
                value={values.address}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="btn">
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
      </form>
    </div>
  );
};

export default PublisherForm;
