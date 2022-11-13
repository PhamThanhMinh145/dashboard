import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/table/Table";
import AuthService from "../../services/auth.service";
import "./style/detailCus.scss";

const initialFValues = {
  owner: "",
  accountEmail: "",
  phone: "",
  accountAddress: "",
  image: "",
  country: "",
  roleID: 0,
};

const DetailCustomer = () => {
  const [values, setValues] = useState(initialFValues);
  const { accountID } = useParams();
  const user = AuthService.getCurrentUser();

  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
      Authorization: "bearer " + user.token,
    },
  };

  useEffect(() => {
    const getEmployee = async () => {
      try {
        await axios
          .get(
            `http://192.168.137.36:7132/Account/GetById/${accountID}`,
            config
          )
          .then((response) => {
            const resData = response.data;
            setValues(resData);
          });
      } catch (e) {
        console.log(e);
      }
    };
    getEmployee();
  }, [accountID]);

  return (
    <div className="singleContainer">
      <div className="top">
        <div className="center">
          <h1 className="title">Customer Information</h1>
          <div className="item">
            <img
              src={
                values?.image !== null
                  ? values?.image
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className="itemImg"
            />
            <div className="details">
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">
                  {values.accountEmail !== null
                    ? values.accountEmail
                    : "Unknown"}
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">
                  {values.phone !== null ? values.phone : "Unknown"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">Last Transactions</h1>
        <List />
      </div>
    </div>
  );
};

export default DetailCustomer;
