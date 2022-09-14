import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'

const Rooms = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        <div className="containet">
          Rooms
        </div>
      </div>
    </div>
  )
}

export default Rooms