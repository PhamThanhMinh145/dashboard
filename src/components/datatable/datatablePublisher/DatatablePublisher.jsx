import React from 'react'
import './datatablePublisher.scss';
import { DataGrid } from '@mui/x-data-grid';
import { publisherRows, publisherColums } from '../../../data/datatableSource';
import { Link }  from "react-router-dom"



const DatatablePublisher = () => {

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
            List Publisher
            <Link to="new" style={{textDecoration: "none"}} className="link">
                Add New
            </Link>
        </div>
        <DataGrid
             rows={publisherRows}
            columns={publisherColums.concat(actionColumn)}
            pageSize={7}
            rowsPerPageOptions={[5]}
            // checkboxSelection
        />
    </div>
  )
}

export default DatatablePublisher