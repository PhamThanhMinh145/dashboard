import React from 'react'
import './datatableAuthor.scss';
import { DataGrid } from '@mui/x-data-grid';
import { authorRows, authorColums } from '../../../data/datatableSource';
import { Link }  from "react-router-dom"



const DatatableAuthor = () => {

  const actionColumn = [
    {field: "action" , headerName:"Action", width:220, 
        renderCell: () => {
            return (
                <div className='cellAction'>
                    <Link to="test" style={{textDecoration:"none"}}>
                        <div className='editButton'>Edit</div>
                    </Link>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }
    }
]

  return (
    <div className='datatable'>
        <div className='datatableTitle'>
            List Author
            <Link to="new" style={{textDecoration: "none"}} className="link">
                Add New
            </Link>
        </div>
        <DataGrid
             rows={authorRows}
            columns={authorColums.concat(actionColumn)}
            pageSize={7}
            rowsPerPageOptions={[5]}
          
            // checkboxSelection
        />
    </div>
  )
}

export default DatatableAuthor