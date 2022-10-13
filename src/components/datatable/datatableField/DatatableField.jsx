import React from 'react'
import './datatableField.scss';
import { DataGrid } from '@mui/x-data-grid';
import { fieldRows, fieldColums } from '../../../data/datatableSource';
import { Link }  from "react-router-dom"



const DatatableField = () => {

  const actionColumn = [
    {field: "action" , headerName:"Action", width:220, 
        renderCell: () => {
            return (
                <div className='cellAction'>
                    <Link to="test" style={{textDecoration:"none"}}>
                        <div className='editButton'>Edit</div>

                    </Link>
                </div>
            )
        }
    }
]

  return (
    <div className='datatable'>
        <div className='datatableTitle'>
            List Field
            <Link to="new" style={{textDecoration: "none"}} className="link">
                Add New
            </Link>
        </div>
        <DataGrid
             rows={fieldRows}
            columns={fieldColums.concat(actionColumn)}
            pageSize={7}
            rowsPerPageOptions={[5]}
          
            // checkboxSelection
        />
    </div>
  )
}

export default DatatableField