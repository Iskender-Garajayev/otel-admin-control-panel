import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Nots = () => {
  return (
    <div className='home'>
    <Sidebar/>
    <div className="homecontainer">
      <Navbar/>
      <div className="containet">
        Nots 
      </div>
    </div>
  </div>
  )
}

export default Nots