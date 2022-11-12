import { TableBody, TableCell, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import ActionButton from "../../form/ActionButton";
import Notification from "../../Notification";
import "../datatableCustomer/style/datatableCus.scss";
import useTable from "../useTable";

const headCells = [
  { id: "accountID", label: "ID" },
  { id: "image", label: "Avatar" },
  { id: "accountEmail", label: "Email" },
  { id: "phone", label: "Contact" },
  { id: "status", label: "Status" },
  { id: "action", label: "Action", disableSorting: true },
];

const DatatableCus = () => {
  
  const user = AuthService.getCurrentUser();
  const [records, setRecords] = useState([]);
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
      "Authorization" : "bearer " + user.token
    },
  };

  useEffect(() => {
    const onGridReady = async () => {
      try {
        await axios
          .get("https://localhost:7091/Account/GetByRole/2", config)
          .then((response) => {
            const resData = response.data;
            setRecords([...records, ...resData]);
          });
      } catch (e) {
        console.log(e);
      }
    };
    onGridReady();
  }, []);

  console.log(records);

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  return (
    <>
      <div className="datatableCustomer">
        <div className="title">List Customer</div>

        <TblContainer>
          <TblHead sx={{ height: "40px" }} />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.accountID} className="rowCustomer">
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
                <TableCell className="cellEmail">
                  <div>{item.accountEmail}</div>
                </TableCell>
                <TableCell className="cellName">
                  <div>{item.phone}</div>
                </TableCell>
                <TableCell className="cellStatus">
                  {item.status === true ? (
                    <div className="active">Active</div>
                  ) : (
                    <div className="disable">Disable</div>
                  )}
                </TableCell>

                <TableCell className="action">
                  <ActionButton color="view" onClick={() => {}}>
                    View Detail
                  </ActionButton>
                  <ActionButton color="changeSta" onClick={() => {}}>
                    Change Status
                  </ActionButton>
                  <ActionButton color="delete">Delete</ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination className="pagination" />
        <Notification notify={notify} setNotify={setNotify} />
      </div>
    </>
  );
};

export default DatatableCus;