import React from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import {Link} from 'react-router-dom';
import DashBoardHome from '../../../pages/DashBoard/DashBoardHome/DashBoardHome';
function Sidebar() {
  return (
    <div className='sidebar'>
    
        <div className='top'>'
        <Link to='/' style={{textDecoration: "none"}}>
        <span className='logo' >Admin Panel</span>
        </Link>
            
        </div>
        <hr />
        <div className='center'>
            <ul>
                <p className='title'>MAIN</p>
                <li>
                    <DashboardIcon className='icons'/>
                    <span>Dashboard</span>
                </li>
                
                <p className='title'>Tenders</p>
                <Link to='/user/all' style ={{textDecoration: "none"}} >
                <li>
                    <PersonOutlineOutlinedIcon className='icons'/>
                    <span>All</span>
                </li>
                </Link>
               
                <Link to='/products' style ={{textDecoration: "none"}} >
               
                <li>
                    <StoreMallDirectoryIcon className='icons'/>
                    <span>Applied</span>
                </li>

                </Link>
               
                

                <li>
                    <LocalShippingIcon className='icons'/>
                    <span>Delivery</span>
                </li>

                <p className='title'>Useful Links</p>

                <li>
                    <AnalyticsIcon className='icons'/>
                    <span>Statistics</span>
                </li>

                <li>
                    <NotificationsOutlinedIcon className='icons'/>
                    <span>Notifications</span>
                </li>

                <p className='title'>Services</p>

                <li>
                    <SettingsSystemDaydreamOutlinedIcon className='icons'/>
                    <span>System Health</span>
                </li>

                <li>
                    <PsychologyOutlinedIcon className='icons'/>
                    <span>Logs</span>
                </li>

                <li>
                    <SettingsOutlinedIcon className='icons'/>
                    <span>Settings</span>
                </li>
                <p className='title'>Users</p>
                <li>
                    <AccountCircleRoundedIcon className='icons'/>
                    <span>Profile</span>
                </li>

                <li>
                    <ExitToAppRoundedIcon className='icons'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>
           <div className='colorOption'></div> 
           <div className='colorOption'></div> 
           <div className='colorOption'></div> 
        </div>

    </div>
  )
}

export default Sidebar