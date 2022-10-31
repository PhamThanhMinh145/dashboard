import {useState, useEffect, useMemo, useCallback, useRef} from 'react'
import axios from 'axios';
import { filter } from 'lodash';
import { styled } from '@mui/material/styles';
import './style/datatableCus.scss'
import { DataGrid } from '@mui/x-data-grid';
import 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { employeeRows, employeeColums } from '../../../data/datatableSource';
import { Link }  from "react-router-dom"

// material
import {
    Stack,
    Button,
    Typography,
  } from '@mui/material';


const DatatableCus = () => {

    const actionColumn = [
        {field: "action" , headerName:"Action", width:220, 
            renderCell: () => {
                return (
                    <div className='cellAction'>
                        <Link to="test" style={{textDecoration:"none"}}>
                            <div className='viewButton'>View</div>

                        </Link>
                        <div className='deleteButton'>Delete</div>

                    </div>
                )
            }
        }
    ]

  return (
    <div className='datatable'>
        <div className='datatableTitle'>
            List Customers
            {/* <Link to="new" style={{textDecoration: "none"}} className="link">
                Add New
            </Link> */}
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