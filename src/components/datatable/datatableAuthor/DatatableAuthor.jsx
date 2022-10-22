import React, { useState, useRef, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { authorRows, authorColums } from "../../../data/datatableSource";
import { Link } from "react-router-dom";
import AuthorForm from "../../../pages/Authors/AuthorForm";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../form/Button";
import Popup from "../../form/Popup";
import "../../datatable/datatableAuthor/style/author.scss";

const DatatableAuthor = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 220,
      renderCell: () => {
        return (
          <div className="action">
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
          List Author
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
        <DataGrid
          rows={authorRows}
          columns={authorColums.concat(actionColumn)}
          pageSize={7}
          rowsPerPageOptions={[5]}

          // checkboxSelection
        />
      </div>

      <Popup
        title="Author form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <AuthorForm />
      </Popup>
    </>
  );
};

export default DatatableAuthor;
