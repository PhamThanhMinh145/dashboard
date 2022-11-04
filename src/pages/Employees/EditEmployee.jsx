import {
  BrightnessAuto,
  Event,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@mui/icons-material";
import React, { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "../Employees/style/editForm.scss";
import { Grid } from "@mui/material";
import Input from "../../components/form/Input"; 
import RadioGroupp from "../../components/form/RadioGroup";
import Select from "../../components/form/Select";
import Checkbox from "../../components/form/Checkbox";
import Button from "../../components/form/Button";
import * as dummy from "../../data/dummy";

const initialFValues = {
  id: 0,
  fullname: "",
  email: "",
  password: "",
  image: "",
  phone: "",
  gender: "male",
  role: "",
  country: "",
  status: false,
};

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const EditEmployee = () => {
  const [file, setFile] = useState("");
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const validationOnChange = true;

  const validation = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullname" in fieldValues)
      temp.fullname = fieldValues.fullname ? "" : "This field is required";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid";
    if ("password" in fieldValues)
      temp.password =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,20}$/.test(
          fieldValues.password
        )
          ? ""
          : "4 to 24 characters. Must begin with a letter. Letters, numbers, underscores, hyphens allowed.";
    if ("phone" in fieldValues)
      temp.phone =
       /^[0-9]{10}$/.test(fieldValues.phone) ? "" : "Maximum 10 numbers required";
    if ("role" in fieldValues)
      temp.role = fieldValues.role.length !== 0 ? "" : "This field is required";
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

  // const resetForm = () => {
  //   setValues(initialFValues);
  //   setErrors({});
  // };

  return (
    <div className="employee">
      <div className="employeeTitleContainer">
        <h1 className="employeeTitle">Edit Employee</h1>
        <button className="employeeAddButton">Create</button>
      </div>

      <div className="employeeContainer">
        <div className="show">
          <div className="showTop">
            <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt="avatar"
              className="employeeShowImg"
            />

            <div className="showTopTitle">
              <span className="showUserName">Anna Becker</span>
              <span className="showRole">Admin</span>
            </div>
          </div>

          <div className="showBottom">
            <span className="showTitle">Account Details</span>

            <div className="showInfo">
              <PermIdentity className="showIcon" />
              <span className="showInfoTitle">annabeck99</span>
            </div>

            <div className="showInfo">
              <Event className="showIcon" />
              <span className="showInfoTitle">10.12.1999</span>
            </div>

            <span className="showTitle">Contact Details</span>

            <div className="showInfo">
              <MailOutline className="showIcon" />
              <span className="showInfoTitle">annabeck99@gmail.com</span>
            </div>

            <div className="showInfo">
              <PhoneAndroid className="showIcon" />
              <span className="showInfoTitle">0963153985</span>
            </div>

            <div className="showInfo">
              <LocationSearching className="showIcon" />
              <span className="showInfoTitle">District 9</span>
            </div>

            <div className="showInfo">
              <BrightnessAuto className="showIcon" />
              <span className="showInfoTitle">active</span>
            </div>
          </div>
        </div>
        <div className="update">
          <span className="updateTitle">Edit Employee</span>

          <form autoComplete="off" onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={6} className="gridInput">
                <div className="input">
                  <Input
                  className="size"
                    name="fullname"
                    label="Full name"
                    value={values.fullname}
                    onChange={handleInputChange}
                    error={errors.fullname}
                  />
                </div>

                <div className="input">
                  <Input
                  className="size"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleInputChange}
                    error={errors.email}
                  />
                </div>

                <div className="input">
                  <Input
                  className="size"
                    name="password"
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleInputChange}
                    error={errors.password}
                  />
                </div>

                <div className="input">
                  <Input
                  className="size"
                    name="phone"
                    label="Phone"
                    value={values.phone}
                    onChange={handleInputChange}
                    error={errors.phone}
                  />
                </div>

                <div className="input">
                  <Input
                  className="size"
                    name="country"
                    label="Country"
                    value={values.country}
                    onChange={handleInputChange}
                  />
                </div>
              </Grid>

              <Grid item xs={6} className="gridInput">
                <div className="radio">
                  <RadioGroupp
                    name="gender"
                    label="Gender"
                    value={values.gender}
                    onChange={handleInputChange}
                    items={genderItems}
                  />
                </div>

                <div className="select">
                  <Select
                    name="role"
                    label="Role"
                    value={values.roleId}
                    onChange={handleInputChange}
                    options={dummy.getRoleCollection()}
                    error={errors.role}
                  />
                </div>

                <div className="checkbox">
                  <Checkbox
                    name="status"
                    label="Status employee"
                    value={values.status}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="imgUpload">
                  <div className="image">
                    <img
                    alt=""
                      src={
                        file
                          ? URL.createObjectURL(file)
                          : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                      }
                    />
                  </div>

                  <div className="buttonUpload">
                    <label htmlFor="file">
                      {" "}
                      <DriveFolderUploadOutlinedIcon className="icon" />
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="image"
                      style={{ display: "none" }}
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>
                </div>

                <div className="btn">
                  <Button
                    type="submit"
                    size="large"
                    text="Submit"
                    className="submit"
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

export default EditEmployee;
