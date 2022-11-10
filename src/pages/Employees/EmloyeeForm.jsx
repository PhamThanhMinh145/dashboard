import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Grid } from "@mui/material";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { storage } from "../../firebaseconfig/firebase";
import "./style/new.scss";

import Button from "../../components/form/Button";
import Input from "../../components/form/Input";
import Select from "../../components/form/Select";
import * as dummy from "../../data/dummy";

const initialFValues = {
  accountEmail: "",
  password: "",
  owner: "",
  image: "",
  roleID: "",
};

const EmloyeeForm = ({ title }) => {
  const [file, setFile] = useState(null);
  const [values, setValues] = useState(initialFValues);
  const [per, setPerc] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      console.log(name);

      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setValues((prev) => ({ ...prev, image: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const addEmployee = async () => {
    try {
      await axios
        .post("http://192.168.137.36:7132/Account/Create", values, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        })
        .then((respone) => {
          console.log(respone.data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const validationOnChange = true;

  const validation = (fieldValues = values) => {
    let temp = { ...errors };
    if ("owner" in fieldValues)
      temp.owner = fieldValues.owner ? "" : "This field is required";
    if ("accountEmail" in fieldValues)
      temp.accountEmail = /$^|.+@.+..+/.test(fieldValues.accountEmail)
        ? ""
        : "Email is not valid";
    if ("password" in fieldValues)
      temp.password =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,20}$/.test(
          fieldValues.password
        )
          ? ""
          : "4 to 24 characters. Must begin with a letter. Letters, numbers, underscores, hyphens allowed.";
    if ("roleID" in fieldValues)
      temp.roleID = fieldValues.roleID !== 0 ? "" : "This field is required";

    setErrors({
      ...temp,
    });
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
      addEmployee();
    }
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };

  console.log(values);

  return (
    <div className="newContainer">
      <div className="top">
        <h1>{title}</h1>
      </div>

      <div className="bottom">
        <div className="left">
          <div className="img">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
        </div>
        <div className="right">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Grid container rowSpacing={1}>
              <Grid item xs={6} className="gridInput">
                <div className="input">
                  <Input
                    className="size"
                    name="owner"
                    label="Full name"
                    value={values.fullname}
                    onChange={handleInputChange}
                    error={errors.fullname}
                  />
                </div>
              </Grid>

              <Grid item xs={6} className="gridInput">
                <div className="input">
                  <Input
                    className="size"
                    name="accountEmail"
                    label="Email"
                    value={values.email}
                    onChange={handleInputChange}
                    error={errors.email}
                  />
                </div>
              </Grid>

              <Grid item xs={6} className="gridInput">
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
              </Grid>

              <Grid item xs={6} className="gridInput">
                <div className="select">
                  <Select
                    name="roleID"
                    label="Role"
                    value={values.roleID}
                    defaultValue=""
                    onChange={handleInputChange}
                    options={dummy.getRoleCollection()}
                    error={errors.role}
                  />
                </div>
              </Grid>

              <Grid item xs={6} className="gridInput">
                <div className="imageUpload">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="image"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid className="btn">
              <Button
                type="submit"
                size="small"
                text="Submit"
                className="submit"
                disabled={per !== null && per < 100}
              />

              <Button
                text="Reset"
                size="small"
                className="reset"
                onClick={resetForm}
              />
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmloyeeForm;
