import React, { useState, useEffect } from "react";
import Button from "../../form/Button";
import useTable from "../useTable";
import AddIcon from "@mui/icons-material/Add";
import "./style/tableAuthor.scss";
import { TableBody, TableCell, TableRow } from "@mui/material";
import ActionButton from "../../form/ActionButton";
import AuthorForm from "../../../pages/Authors/AuthorForm";
import Popup from "../../form/Popup";
import Notification from "../../Notification";
import AuthService from "../../../services/auth.service";
import ConfirmDialog from "../../form/ConfirmDialog";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const headCells = [
  { id: "authorID", label: "ID" },
  { id: "authorName", label: "Author name" },
  { id: "action", label: "Action", disableSorting: true },
];

const TableAuthor = ({ onError }) => {
  const [records, setRecords] = useState([]);
  const [record, setRecord] = useState();
  const [filterFn] = useState({
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

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const user = AuthService.getCurrentUser();
  const url = "https://localhost:7091/Author/Get";

  const fetchAuthor = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "bearer " + user.token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      //redirect: "follow",
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log("result", json);
        setRecords(json);
      })
      .catch(() => onError());
  };

  const postAuthor = (author) => {
    fetch("https://localhost:7091/Author/Create", {
      method: "POST",
      headers: {
        accept: "*/*",
        Authorization: "bearer " + user.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authorID: author.authorID,
        authorName: author.authorName,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("author add", json);
        setRecord(json);
      })
      .catch(() => onError());
  };

  const putAuthor = (author) => {
    fetch(`https://localhost:7091/Author/Update/${author.authorID}`, {
      method: "PUT",
      headers: {
        accept: "*/*",
        Authorization: "bearer " + user.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authorID: author.authorID,
        authorName: author.authorName,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("author update", json);
        setRecordForEdit(json);
      })
      .catch((e) => console.log(e));
  };

  const deleteAuthor = (author) => {
    fetch(`https://localhost:7091/Author/Delete/${author}`, {
      method: "DELETE",
      headers: {
        accept: "*/*",
        Authorization: "bearer " + user.token,
      },
      body: JSON.stringify({
        authorID: author.authorID,
        authorName: author.authorName,
      }),
    })
      .then(() => {
        setRecord(fetchAuthor());
      })

      .catch((e) => console.log(e));
  };

  const addAuthor = (author, resetForm) => {
    if (author.authorID === 0) {
      postAuthor(author);
    } else {
      putAuthor(author);
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

  const onDelete = (author) => {
    deleteAuthor(author);
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });

    setNotify({
      isOpen: true,
      message: "Deleted Successfully",
      type: "error",
    });
  };

  useEffect(() => {
    fetchAuthor();
  }, [record, recordForEdit]);

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  return (
    <>
      <div className="datatableAuthor">
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

        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.authorID} className="rowAuthor">
                <TableCell className="cellID">{item.authorID}</TableCell>
                <TableCell className="cellName">{item.authorName}</TableCell>
                <TableCell className="action">
                  <div className="tip">
                    <TooltipComponent content="Edit" position="BottomCenter" >
                      <ActionButton
                        
                        color="edit"
                        onClick={() => {
                          openInPopup(item);
                        }}
                      >
                        <EditIcon fontSize="small" />
                      </ActionButton>
                    </TooltipComponent>
                    <TooltipComponent content="Delete" position="BottomCenter">
                      <ActionButton
                        color="delete"
                        onClick={() => {
                          setConfirmDialog({
                            isOpen: true,
                            title: "Are you sure to delete this record?",
                            subTitle: "You can't undo this operation",
                            onConfirm: () => {
                              onDelete(item.authorID);
                            },
                          });
                        }}
                      >
                        <DeleteIcon />
                      </ActionButton>
                    </TooltipComponent>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination className="pagination" />
      </div>

      <Popup
        title="Author form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <AuthorForm recordForEdit={recordForEdit} addAuthor={addAuthor} />
      </Popup>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};

export default TableAuthor;
