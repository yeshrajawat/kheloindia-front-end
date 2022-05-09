import React from 'react';
import './Datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from '../../../pages/DashBoard/datatablesource';
import { Link } from 'react-router-dom';
const DataTable = () => {

    const actionColumn=[{
        field: "action",
      headerName: "Action",
      width: 230,
      renderCell: () => {
        return (
          <div className="cellAction">
            
            <Link to='/user/single' style={{textDecoration:"none"}}>
            <div className='viewButton'>View</div>
            </Link>
           
           <div className='deleteButton'>Delete</div>
          </div>
        );
    }
    }]


  return (
    <div className='datatable'>
         <div className="datatableTitle">
          Add New User
           <Link to='/user/new' style={{textDecoration:'none'}} className='link'> Add User </Link>
         </div>
         <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable