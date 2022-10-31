import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import axios from "axios";
import { filter } from "lodash";
import { styled } from "@mui/material/styles";
import "./style/datatableCus.scss";
import { DataGrid } from "@mui/x-data-grid";
import "ag-grid-enterprise";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { employeeRows, employeeColums } from "../../../data/datatableSource";
import { Link } from "react-router-dom";

// material
import { Stack, Button, Typography } from "@mui/material";

const DatatableCus = () => {
    const [page, setPage] = useState(0);

    const [order, setOrder] = useState("asc");

    const [selected, setSelected] = useState([]);

    const [orderBy, setOrderBy] = useState("name");

    const [filterName, setFilterName] = useState("");

    const [paginationPageSize, setPaginationPageSize] = useState(10);

    const [rowsPerPage, setRowsPerPage] = useState(5);

    // const [vouchers, setVoucher] = useState([]);

    const [error, setError] = useState(null);

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 150,
            
            filter: true,
        };
    }, []);

    const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const [rowData, setRowData] = useState([]);

    const [columnDefs, setColumnDefs] = useState([
        { field: "accountID" },
        { field: "accountEmail" },
        { field: "status" },
    ]);

    const config = {
        Headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    };

    const bodyParameters = {
        params: {
            pageNumber: 1,
            pageSize: paginationPageSize,
            filterString: "a",
        },
    };

    const onGridReady = useCallback((params) => {
        axios
            .get("https://localhost:7091/Account/Get", bodyParameters, config)
            .then((response) => {
                setRowData(response.data);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    console.log(rowData);

    const handleFilterByName = (event) => {
        setFilterName(event.target.value);
    };
    // const actionColumn = [
    //     {field: "action" , headerName:"Action", width:220,
    //         renderCell: () => {
    //             return (
    //                 <div className='cellAction'>
    //                     <Link to="test" style={{textDecoration:"none"}}>
    //                         <div className='viewButton'>View</div>

    //                     </Link>
    //                     <div className='deleteButton'>Delete</div>

    //                 </div>
    //             )
    //         }
    //     }
    // ]

    return (
        <div style={containerStyle}>
            {/* <UserListToolbar
                filterName={filterName}
                onFilterName={handleFilterByName}
                searchName={"Search Customer"}
            /> */}
            <div style={gridStyle} className="ag-theme-alpine">
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs} 
                    defaultColDef={defaultColDef}
                    //   rowModelType={'serverSide'}
                    pagination
                    paginationPageSize={paginationPageSize}
                    cacheBlockSize={10}
                    animateRows
                    onGridReady={onGridReady}
                />
            </div>
        </div>
    );
};

export default DatatableCus;
