import React from 'react';
import Chart from '../../../components/DashBoardComponent/chart/Chart';
import DashNavbar from '../../../components/DashBoardComponent/DashNavbar/DashNavbar';
import Sidebar from '../../../components/DashBoardComponent/sidebar/Sidebar';
import BasicTable from '../../../components/DashBoardComponent/basictable/BasicTable';

import './Single.scss';
function Single() {
  return (
    <div className='single'>
      <Sidebar/>
     <div className="singleContainer">
     <DashNavbar/>
      <div className="top">
        <div className="left">
          <div className="editButton">
            Edit
          </div>

          <h1 className='title'>Information</h1>
          <div className="item">
          
            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className='itemImg'/>
         

          <div className="details">
            <h1 className='itemTitle'>Jane Doe</h1>

            <div className="detailItem">
              <span className='itemKey'>Email: </span>
              <span className='itemValue'>janedoe@gmail.com</span>
            </div>
            
            <div className="detailItem">
              <span className='itemKey'>Phone: </span>
              <span className='itemValue'>+1 23 45 67 89</span>
            </div>

            <div className="detailItem">
              <span className='itemKey'>Address: </span>
              <span className='itemValue'>Elton St. 234 Garden Yd. NewYork</span>
            </div>

            <div className="detailItem">
              <span className='itemKey'>Country: </span>
              <span className='itemValue'>USA</span>
            </div>

          </div>
          </div>
        </div>
        <div className="right">
          <Chart title="User Spending(Last 6 Months)" aspect={4/1} className="chart"/>
        </div>
      </div>
      <div className="bottom">
        <h1 className='title'>Last Transactions</h1>
        <BasicTable/>

      </div>
     </div>
    </div>
  )
}

export default Single;