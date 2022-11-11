import React, {useEffect, useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./style/booktable.scss";
import { bookColums , bookRows } from "../../../data/datatableSource";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../../redux/apiCalls";

const BookTable = () => {

  const books = useSelector((state) => state.book.products);
  console.log(books)
  const dispatch = useDispatch();
  useEffect(() => {
      getBooks(dispatch);
  },[dispatch])

  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="detailButton">Detail</div>

            <Link to="test" style={{ textDecoration: "none" }}>
              <div className="editButton">Edit</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        List Books
        <div>
        <Link to="newbook" style={{ textDecoration: "none" }} className="link">
          Add New
        </Link>
        <Link to="import" style={{ textDecoration: "none" }} className="link">
          Import file
        </Link>
        </div>
      </div>
      <DataGrid
        rows={bookRows}
        columns={bookColums.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
};

export default BookTable;
