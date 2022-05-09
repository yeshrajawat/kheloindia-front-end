import React from 'react'
import DataTable from '../../../components/DashBoardComponent/datatable/DataTable'
import DashNavbar from '../../../components/DashBoardComponent/DashNavbar/DashNavbar'
import Sidebar from '../../../components/DashBoardComponent/sidebar/Sidebar'
import './List.scss'
function List() {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <DashNavbar/>
        <DataTable/>
      </div>
    </div>
  )
}

export default List;