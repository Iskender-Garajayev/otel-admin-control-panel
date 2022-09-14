import React from 'react'
import './sidebar.css'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Brightness3OutlinedIcon from '@mui/icons-material/Brightness3Outlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar' >
      <div className="top">
        <span className="logo">Hotel</span>
      </div>
      <div className="center">
        <ul>
          <li><Link to='/'>
          <span>Main Page</span>
          </Link></li>
          <li>
            <Link to='/rooms'>
            <BedOutlinedIcon/><span>Rooms</span>
            </Link>
          </li>
          <li><span>Accounting</span></li>
          <li><BadgeOutlinedIcon/><span>Personals</span></li>
        </ul>
      </div>
       <div className="bottom">
        <div><LightModeOutlinedIcon className="light"/></div>
        <div><Brightness3OutlinedIcon  className="dark"/></div>
       </div>
    </div>
  )
}

export default Sidebar