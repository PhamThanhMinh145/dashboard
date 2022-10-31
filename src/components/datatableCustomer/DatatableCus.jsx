import { useState, useEffect, useMemo, useCallback, useRef, React } from 'react';
import axios from 'axios';
import './style/datatableCus.scss';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { employeeRows, employeeColums } from '../../data/datatableSource';
import { Link }  from "react-router-dom";
import 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Stack, Button, Typography } from '@mui/material';



const DatatableCus = () => {

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [paginationPageSize, setPaginationPageSize] = useState(10);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [error, setError] = useState(null);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 150,
      filter: true,
    };
  }, []);

  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState([]);


  const [columnDefs, setColumnDefs] = useState([
    { field: 'Id' },
    { field: 'Name' },
    { field: 'Email'},
    {
      field: 'age', filter: 'agNumberColumnFilter'},
    { field: 'status' },
  ]);

  const bodyParameters = {
    params: {
      pageNumber: 1,
      pageSize: paginationPageSize,
      filterString: 'a',
    },
  };

  const onGridReady = useCallback((params) => {
    axios
      .get('', bodyParameters, config)
      .then((response) => {
        setRowData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  console.log(rowData);
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
    <div className='datatable'>
        <div className='datatableTitle'>
            List Customers
        </div>
        <DataGrid
            rows={employeeRows}
            columns={employeeColums.concat(actionColumn)}
            pageSize={7}
            rowsPerPageOptions={[5]}
            checkboxSelection
            
            
        />
    </div>
  )
}

export default DatatableCus