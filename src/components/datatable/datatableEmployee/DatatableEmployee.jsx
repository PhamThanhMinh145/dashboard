import { TableBody, TableCell, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ActionButton from "../../form/ActionButton";
import Notification from "../../Notification";
import "../datatableEmployee/style/employee.scss";
import useTable from "../useTable";
import AuthService from "../../../services/auth.service";

const headCells = [
  { id: "accountID", label: "ID" },
  { id: "image", label: "Avatar" },
  { id: "owner", label: "Full Name" },
  { id: "roleID", label: "Role" },
  { id: "accountEmail", label: "Email" },
  { id: "phone", label: "Contact" },
  { id: "country", label: "Country" },
  { id: "status", label: "Status" },
  { id: "action", label: "Action", disableSorting: true },
];

const DatatableEmployee = () => {
  const user = AuthService.getCurrentUser();
  const [records, setRecords] = useState([]);
  const [record, setRecord] = useState(null);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
      Authorization: "bearer " + user.token,
    },
  };

  const navigate = useNavigate();

  useEffect(() => {
    const onGridReady = async () => {
      try {
        await axios
          .get("https://localhost:7091/Account/GetByRole/1", config)
          .then((response) => {
            const resData = response.data;
            setRecords([...records, ...resData]);
          });
      } catch (e) {
        console.log(e);
      }
      try {
        await axios
          .get("https://localhost:7091/Account/GetByRole/3", config)
          .then((response) => {
            const resData = response.data;
            setRecords((records) => [...records, ...resData]);
          });
      } catch (e) {
        console.log(e);
      }
    };
    onGridReady();
  }, []);

  console.log(records);

  const deleteEmployee = async () => {
    try {
      await axios
        .delete(`https://localhost:7091/Account/Delete/${record}`, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
            Authorization: "bearer " + user.token,
          },
        })
        .then((respone) => {
          console.log("Employee Delete", respone.data);
          window.location.reload();
        });
    } catch (e) {
      console.log(e);
    }
  };

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  return (
    <>
      <div className="datatableEmployee">
        <div className="title">
          List Employees
          <Link
            to="newemployee"
            style={{ textDecoration: "none" }}
            className="link"
          >
            Add New
          </Link>
        </div>

        <TblContainer>
          <TblHead sx={{ height: "40px" }} />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.accountID} className="rowEmployee">
                <TableCell className="cellID">
                  <div>{item.accountID}</div>
                </TableCell>
                <TableCell className="cellImg">
                  <img
                    src={
                      item?.image !== null
                        ? item?.image
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                    alt=""
                  />
                </TableCell>
                <TableCell className="cellName">
                  <div>{item.owner}</div>
                </TableCell>

                <TableCell className="cellRole">
                  <div>{item.roleID === 1 ? "Admin" : "Staff"}</div>
                </TableCell>

                <TableCell className="cellEmail">
                  <div>{item.accountEmail}</div>
                </TableCell>
                <TableCell className="cellPhone">
                  <div>{item.phone}</div>
                </TableCell>
                <TableCell className="cellCountry">
                  <div>{item.country}</div>
                </TableCell>
                <TableCell className="cellStatus">
                  {item.status === true ? (
                    <div className="active">Active</div>
                  ) : (
                    <div className="disable">Disable</div>
                  )}
                </TableCell>

                <TableCell className="action">
                  <ActionButton
                    color="edit"
                    onClick={() => {
                      navigate(`/employee/editemployee/${item.accountID}`);
                    }}
                  >
                    Edit
                  </ActionButton>
                  <ActionButton
                    color="delete"
                    onClick={() => {
                      setRecord(item.accountID);
                      console.log(record);
                      deleteEmployee();
                    }}
                  >
                    Delete
                  </ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination className="pagination" />
      </div>

      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};

export default DatatableEmployee;
