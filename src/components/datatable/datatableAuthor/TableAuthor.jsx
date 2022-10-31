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
import { useRef } from "react";
const headCells = [
    { id: "authorID", label: "ID" },
    { id: "authorName", label: "Author name" },
    { id: "action", label: "Action", disableSorting: true },
];

const TableAuthor = ({ onError }) => {
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

    const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } = useTable(
        records,
        headCells,
        filterFn
    );

    const url = "https://localhost:7091/Author/Get";

    const fetchAuthor = () => {
        fetch(url)
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

    const addAuthor = (author, resetForm) => {
        if (author.authorID == 0) {
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

    useEffect(() => {
        fetchAuthor();
    }, [record, recordForEdit]);

    const openInPopup = (item) => {
        setRecordForEdit(item);
        setOpenPopup(true);
    };

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

                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {recordsAfterPagingAndSorting().map((item) => (
                            <TableRow key={item.authorID} className="rowAuthor">
                                <TableCell>{item.authorID}</TableCell>
                                
                                <TableCell>{item.authorName}</TableCell>
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

            <Popup title="Author form" openPopup={openPopup} setOpenPopup={setOpenPopup}>
                <AuthorForm recordForEdit={recordForEdit} addAuthor={addAuthor} />
            </Popup>
            <Notification notify={notify} setNotify={setNotify} />
        </>
    );
};

export default TableAuthor;
