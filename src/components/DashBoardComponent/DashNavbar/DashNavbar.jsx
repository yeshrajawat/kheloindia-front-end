import React from 'react'
import './DashNavbar.scss';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

function DashNavbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>

        <div className='search'>
            <input placeholder='Search...' type='text'/>
            <SearchRoundedIcon className='icons'/>
        </div>
        <div className='items'>
            
            <div className='item'>
              <LanguageRoundedIcon  className='icons'/>
              English
            </div>

            <div className='item'>
              <DarkModeOutlinedIcon  className='icons'/>
              
            </div>

            <div className='item'>
              <NotificationsNoneOutlinedIcon  className='icons'/>
              <div className='counter'>1</div>
              
            </div>

            <div className='item'>
              <ChatBubbleOutlineOutlinedIcon  className='icons'/>
              <div className='counter'>2</div>
            </div>

            <div className='item'>
              <ListOutlinedIcon className='icons' />
            </div>

            <div className='item'>
              <img className='avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' />
            </div>

        </div>

      </div>

    </div>
  )
}

export default DashNavbar;