import React, { useState } from "react";
import "./style/bookForm.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Grid } from "@mui/material";
import Input from "../../components/form/Input";
import Select from "../../components/form/Select";

import Button from "../../components/form/Button";
import * as dummy from "../../data/dummy";
import DatePickers from "../../components/form/DatePicker";
import Editor from "../../components/form/Editor";
import parse from "html-react-parser";

const initialFValues = {
  id: 0,
  name: "",
  price: "",
  quantity: "",
  image: "",
  describe: "",
  date: new Date(),
  field: "",
  publisher: "",
  author: "",
};

const config = {
  buttons: [
    "bold",
    "italic",
    "underline",
    "link",
    "unlink",
    "source",
    "align",
    "undo",
    "redo",
    "fontsize",
  ],
};

const BookForm = ({ title }) => {
  const [file, setFile] = useState("");
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const validationOnChange = true;

  const validation = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required";
    if ("price" in fieldValues)
      temp.price = /^[0-9]{1,10}$/.test(fieldValues.price)
        ? ""
        : "Price is required";

    if ("quantity" in fieldValues)
      temp.quantity = /^[0-9]{1,10}$/.test(fieldValues.quantity)
        ? ""
        : "quantity is required";

    if ("field" in fieldValues)
      temp.field =
        fieldValues.field.length !== 0 ? "" : "This field is required";

    if ("publisher" in fieldValues)
      temp.publisher =
        fieldValues.publisher.length !== 0 ? "" : "This field is required";

    if ("author" in fieldValues)
      temp.author =
        fieldValues.author.length !== 0 ? "" : "This field is required";
    setErrors({
      ...temp,
    });

    if (fieldValues === values) return Object.values(temp).every((x) => x === "");
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
    <div className="newContainer">
      <div className="top">
        <h1>{title}</h1>
      </div>

      <div className="bottom">
        <div className="left">
          <div className="i">
            <img
            alt=""
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
            />
          </div>
        </div>
        <div className="right">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={6} className="gridInput">
                <div className="imageUpload">
                  <label htmlFor="file">
                    {" "}
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="image"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>

                <div className="input">
                  <Input
                    className="size"
                    name="name"
                    label="Book name"
                    value={values.name}
                    onChange={handleInputChange}
                    error={errors.name}
                  />
                </div>

                <div className="input">
                  <Input
                    className="size"
                    name="price"
                    label="Price"
                    type="number"
                    value={values.price}
                    onChange={handleInputChange}
                    error={errors.price}
                  />
                </div>

                <div className="input">
                  <Input
                    className="size"
                    name="quantity"
                    label="Quantity"
                    type="number"
                    value={values.quantity}
                    onChange={handleInputChange}
                    error={errors.quantity}
                  />
                </div>
              </Grid>

              <Grid item xs={6} className="gridInput">
                <div className="date">
                  <DatePickers
                    size="size"
                    name="date"
                    label="Publish Date"
                    value={values.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="select">
                  <Select
                    name="author"
                    label="Author"
                    value={values.author}
                    onChange={handleInputChange}
                    options={dummy.getAuthorCollection()}
                    error={errors.author}
                  />
                </div>

                <div className="select">
                  <Select
                    name="publisher"
                    label="Publisher"
                    value={values.publisher}
                    onChange={handleInputChange}
                    options={dummy.getPublisherCollection()}
                    error={errors.publisher}
                  />
                </div>

                <div className="select">
                  <Select
                    name="field"
                    label="Field"
                    value={values.field}
                    onChange={handleInputChange}
                    options={dummy.getFieldCollection()}
                    error={errors.field}
                  />
                </div>
              </Grid>

              <Grid item xs={10}>
                <Editor
                  name="describe"
                  value={values.describe}
                  config={config}
                  onChange={handleInputChange}
                />

                <div>{parse(values.describe)}</div>
              </Grid>

              <Grid item xs={10} className="gridInput">
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
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
