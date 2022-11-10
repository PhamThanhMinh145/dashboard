import AddIcon from "@mui/icons-material/Add";
import { TableBody, TableCell, TableRow } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import FieldForm from "../../../pages/Fields/FieldForm";
import ActionButton from "../../form/ActionButton";
import Button from "../../form/Button";
import Popup from "../../form/Popup";
import Notification from "../../Notification";
import "../datatableAuthor/style/tableAuthor.scss";
import useTable from "../useTable";
const headCells = [
  { id: "fieldID", label: "ID" },
  { id: "fieldName", label: "Field name" },
  { id: "fieldDescription", label: "Description" },
  { id: "action", label: "Action", disableSorting: true },
];

const DatatableField = ({ onError }) => {
  const [records, setRecords] = useState([]);
  const [record, setRecord] = useState();
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const url = "http://192.168.137.36:7132/Field/GetAll";

  const fetchField = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("result", json);
        setRecords(json);
      })
      .catch(() => onError());
  };

  const postField = (field) => {
    fetch("https://localhost:7091/Field", {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fieldID: field.fieldID,
        fieldName: field.fieldName,
        fieldDescription: field.fieldDescription,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Field add", json);
        setRecord(json);
      })
      .catch(() => onError());
  };

  const putField = (field) => {
    fetch(`https://localhost:7091/Field/Update/${field.fieldID}`, {
      method: "PUT",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fieldID: field.fieldID,
        fieldName: field.fieldName,
        fieldDescription: field.fieldDescription,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("field update", json);
        setRecordForEdit(json);
      })
      .catch((e) => console.log(e));
  };

  const addField = (field, resetForm) => {
    if (field.fieldID == 0) {
      postField(field);
    } else {
      putField(field);
    }
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setNotify({
      isOpen: true,
      message: "Submitted Successfully",
      type: "success",
    });
  };

  useEffect(() => {
    fetchField();
  }, [record, recordForEdit]);

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);
  return (
    <>
      <div className="datatable">
        <div className="title">
          List Field
          <Button
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            size="small"
            onClick={() => {
              setOpenPopup(true);
              //setRecordForEdit(null);
            }}
            color="addNewAuthor"
          />
        </div>

        <TblContainer>
          <TblHead sx={{ height: "40px" }} />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.fieldID} className="rowAuthor">
                <TableCell>{item.fieldID}</TableCell>
                <TableCell>{item.fieldName}</TableCell>
                <TableCell>{item.fieldDescription}</TableCell>

                <TableCell className="action">
                  <ActionButton
                    color="edit"
                    onClick={() => {
                      openInPopup(item);
                    }}
                  >
                    Edit
                  </ActionButton>
                  <ActionButton color="delete">Delete</ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination className="pagination" />
      </div>

      <Popup
        title="Field form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <FieldForm recordForEdit={recordForEdit} addField={addField} />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};

export default DatatableField;
