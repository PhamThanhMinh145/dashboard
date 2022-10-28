import React, { useState, useRef, useEffect } from "react";
import "../datatablePublisher/style/datatablePublisher.scss";
import useTable from "../useTable";
import AddIcon from "@mui/icons-material/Add";
import ActionButton from "../../form/ActionButton";
import PublisherForm from "../../../pages/Publishers/PushlisherForm";
import Popup from "../../form/Popup";
import Notification from "../../Notification";
import { TableBody, TableCell, TableRow } from "@mui/material";
import Button from "../../form/Button";

const headCells = [
  { id: "publisherID", label: "ID" },
  { id: "publisherName", label: "Publisher name" },
  { id: "fieldAddress", label: "Address" },
  { id: "action", label: "Action", disableSorting: true },
];
const DatatablePublisher = ({ onError }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [records, setRecords] = useState([]);
  const [record, setRecord] = useState();
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const urlGet = "https://localhost:7091/Publisher/Get";
 

  const fetchPublisher = () => {
    fetch(urlGet)
      .then((response) => response.json())
      .then((json) => {
        console.log("result", json);
        setRecords(json);
      })
      .catch(() => onError());
  };

  const urlPost = "https://localhost:7091/Publisher/Create";
  const postPublisher = (publisher) => {
    fetch(urlPost, {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        publisherID: publisher.publisherID,
        publisherName: publisher.publisherName,
        fieldAddress: publisher.fieldAddress,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("publisher add", json);
        setRecord(json);
      })
      .catch(() => onError());
  };

  const putPublisher = (publisher) => {
    fetch(`https://localhost:7091/Publisher/Update/${publisher.publisherID}`, {
      method: "PUT",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        publisherID: publisher.publisherID,
        publisherName: publisher.publisherName,
        fieldAddress: publisher.fieldAddress,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("publisher update", json);
        setRecordForEdit(json);
      })
      .catch((e) => console.log(e));
  };

  const addOrEditPublisher = (publisher, resetForm) => {
    if (publisher.publisherID === 0) {
      postPublisher(publisher);
    } else {
      putPublisher(publisher);
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
    fetchPublisher();

  }, [record, recordForEdit]);

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  return (
    <>
      <div className="table">
        <div className="title">
          List Publisher
          <Button
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            size="small"
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
            color="addNewPublisher"
          />
        </div>
        
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.publisherID} className="rowPublisher">
                <TableCell>{item.publisherID}</TableCell>
                <TableCell>{item.publisherName}</TableCell>
                <TableCell>{item.fieldAddress}</TableCell>
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
        title="Publisher form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <PublisherForm recordForEdit={recordForEdit} addOrEditPublisher={addOrEditPublisher} />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};

export default DatatablePublisher;
