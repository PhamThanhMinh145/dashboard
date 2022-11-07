import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../form/Button";
import "ag-grid-enterprise";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./style/employee.scss";

const DatatableEmployee = () => {
  const [filterName, setFilterName] = useState("");

  const [paginationPageSize, setPaginationPageSize] = useState(10);

  const [error, setError] = useState(null);

  const [openPopup, setOpenPopup] = useState(false);

  const [accountEmail, setAccountEmail] = useState();
  const [password, setPassword] = useState();
  const [roleID, setRoleID] = useState();

  const employee = {
    accountEmail,
    password,
    roleID,
  };

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      filter: true,
    };
  }, []);

  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "70%", width: "100%" }), []);
  const [rowData, setRowData] = useState([]);

  const [columnDefs, setColumnDefs] = useState([
    { field: "accountID", filter: "agNumberColumnFilter" },
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
      .get(
        "http://192.168.137.36:7132/Account/GetByRole/3",
        bodyParameters,
        config
      )
      .then((response) => {
        const resData = response.data;
        setRowData([...rowData, ...resData]);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  async function addEmployee() {
    try {
      await axios
        .post("http://192.168.137.36:7132/Account/Create", employee, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .catch((respone) => {
          {
            console.log(respone.data);
          }
        });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    console.log("Changed rowData: ", rowData);
  }, [rowData]);

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  return (
    <>
      <div style={containerStyle}>
        <div className="title">
          List Employees
          <Button
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            size="small"
            color="addNewEmloyee"
            
          />
        </div>

        <div style={gridStyle} className="ag-theme-alpine">
          {rowData.map((item) => {
            //condition 1
            {
              if (item.status === true) {
                item.status = "Active";
              } else if (item.status === false) {
                item.status = "Disable";
              }
            }
          })}
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            pagination
            paginationPageSize={paginationPageSize}
            cacheBlockSize={5}
            animateRows
            onGridReady={onGridReady}
          ></AgGridReact>
        </div>
      </div>
    </>
  );
};

export default DatatableEmployee;
