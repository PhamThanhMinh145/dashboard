import React from 'react'
import './style/orderTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { orderRows, orderColums } from '../../../data/datatableSource';
import { Link }  from "react-router-dom"



const OrderTable = () => {

    const actionColumn = [
        {field: "action" , headerName:"Action", width:300, 
            renderCell: () => {
                return (
                    <div className='cellAction'>
                        <div className='detailButton'>Detail</div>
                        <Link to="test" style={{textDecoration:"none"}}>
                            <div className='editButton'>Accept</div>
                        </Link>
                        <div className='deleteButton'>Reject</div>
                       

                    </div>
                )
            }
        }
    ]

  return (
    <div className='datatable'>
        <div className='datatableTitle'>
            List Orders
           
           
           
        </div>
        <DataGrid
            rows={orderRows}
            columns={orderColums.concat(actionColumn)}
            pageSize={7}
            rowsPerPageOptions={[5]}
            // checkboxSelection
        />
    </div>
  )
}

export default OrderTable