import React, { useState, useRef, useEffect } from "react";
import "../datatableField/style/datatableField.scss"
import { DataGrid } from "@mui/x-data-grid";
import { fieldRows, fieldColums } from "../../../data/datatableSource";
import { Link } from "react-router-dom";
import FieldForm from '../../../pages/Fields/FieldForm'
import AddIcon from "@mui/icons-material/Add";
import Button from "../../form/Button";
import Popup from "../../form/Popup";

const DatatableField = () => {
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
            color="addNewField"
          />
        </div>
        <DataGrid
          rows={fieldRows}
          columns={fieldColums.concat(actionColumn)}
          pageSize={7}
          rowsPerPageOptions={[5]}
        />
      </div>

      <Popup
        title="Field form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <FieldForm />
      </Popup>
    </>
  );
};

export default DatatableField;
