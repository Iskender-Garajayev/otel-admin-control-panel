import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Gests = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        <div className="containet">
          Gests 
        </div>
      </div>
    </div>
  )
}

export default Gests