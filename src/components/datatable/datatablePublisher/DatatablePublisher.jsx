import React, { useState, useRef, useEffect } from "react";
import "../datatablePublisher/style/datatablePublisher.scss";
import { DataGrid } from "@mui/x-data-grid";
import { publisherRows, publisherColums } from "../../../data/datatableSource";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../form/Button";
import PublisherForm from "../../../pages/Publishers/PushlisherForm";
import Popup from "../../form/Popup";
import CheckOutsideClick from "../../form/CheckOutsideClick";

const DatatablePublisher = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 220,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Button
              text="Edit"
              variant="outlined"
              size="small"
              onClick={() => {
                setOpenPopup(true);
                //setRecordForEdit(null);
              }}
              color="editButton"
            />
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="datatable">
        <div className="title">
          List Publisher
          <Button
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            size="small"
            onClick={() => {
              setOpenPopup(true);
              //setRecordForEdit(null);
            }}
            color="addNewPublisher"
          />
        </div>
        <DataGrid
          rows={publisherRows}
          columns={publisherColums.concat(actionColumn)}
          pageSize={7}
          rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      </div>

      <Popup
        title="Publisher from"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <PublisherForm />
      </Popup>
    </>
  );
};

export default DatatablePublisher;
