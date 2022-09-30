import React from 'react'
import Datatable from '../../components/datatable/Datatable'
import "./list.scss"

const ListEmployees = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-xl'>
        <Datatable/>
    </div>
  )
}

export default ListEmployees