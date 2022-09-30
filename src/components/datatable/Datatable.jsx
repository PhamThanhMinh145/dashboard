import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { employeeRows, employeeColums } from '../../data/datatableSource';
import { Link }  from "react-router-dom"



const Datatable = () => {

    const actionColumn = [
        {field: "action" , headerName:"Action", width:220, 
            renderCell: () => {
                return (
                    <div className='cellAction'>
                        <Link to="test" style={{textDecoration:"none"}}>
                            <div className='editButton'>Edit</div>

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
            List Employees
            <Link to="new" style={{textDecoration: "none"}} className="link">
                Add New
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
  )
}

export default Datatable