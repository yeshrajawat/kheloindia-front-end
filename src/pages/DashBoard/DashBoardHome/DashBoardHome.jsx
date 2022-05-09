import React, { useEffect, useState } from 'react'
import BasicTable from '../../../components/DashBoardComponent/basictable/BasicTable';
import Chart from '../../../components/DashBoardComponent/chart/Chart';
import Featured from '../../../components/DashBoardComponent/featured/Featured';
import DashNavbar from '../../../components/DashBoardComponent/DashNavbar/DashNavbar';
import Sidebar from '../../../components/DashBoardComponent/sidebar/Sidebar';

import Widget from '../../../components/DashBoardComponent/widget/Widget';
import './DashBoardHome.scss'
import Axios from 'axios';
Axios.defaults.withCredentials=true
function DashBoardHome() {


  const [tenderList ,setTenderList] = useState([{
    _id:"",
    createdAt:"",
    updatedAt:"",
    tenderId:"",
    tendername: "",
    tenderDesc:"",
    currentBid:"",
    lastDate:0,
    timeStamps:""
  }])
  

  const getTenderDetails = () => {
    Axios.get('http://localhost:3001/user/tender/all',{
      withCredentials:true
    }).then(response=> {
      setTenderList(response.data.tenderList);
      console.log(response.data.tenderList);
    })
  }


  useEffect(()=>{
   getTenderDetails();
   console.log("tenderList",tenderList);
  },[])

  
  
  
  return (
    <div className='home'>
        <Sidebar/>
        <div className='homeContainer'>
          <DashNavbar/>
          <div className="widgets">
            <Widget type="No of Tenders" numbers={tenderList.length}/>
            <Widget type="Money Bidded"/>
            <Widget type="applied"/>
            <Widget type="balance"/>
          </div>

          <div className="charts">
            <Featured/>
            <Chart title="Last 12 Months Revenue" aspect={3 / 1}/>
          </div>
          <div className="listContainer">
            <div className="listTitle">
              Latest Transcations
              <BasicTable/>
            </div>
          </div>
        
        </div>
    </div>
  )
}

export default DashBoardHome;