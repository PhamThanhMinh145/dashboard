import React from "react";
import "../datatableEmployee/style/employee.scss";
import { DataGrid } from "@mui/x-data-grid";
import { employeeRows, employeeColums } from "../../../data/datatableSource";
import { Link } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import Input from "../../form/Input";
import { Search } from "@mui/icons-material";

const DatatableEmployee = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: () => {
        return (
          <div className="cellAction">
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
      <div className="title">List Employees</div>
      <div className="subTitle">
        
          <Input
            size="size"
            label="Search"
            other={{
              InputProps: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              },
            }}
            //onChange={handleSearch}
          />


        <Link to="new" style={{ textDecoration: "none" }} className="link">
          <span>Add new</span>
        </Link>
      </div>

      <DataGrid
        rows={employeeRows}
        columns={employeeColums.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
};

export default DatatableEmployee;
