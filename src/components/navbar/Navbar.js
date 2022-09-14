import React from 'react'
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <SearchOutlinedIcon/>
      <input type="text"  placeholder='Search'/>
    </div>
  )
}

export default Navbar