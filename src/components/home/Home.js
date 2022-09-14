import React from 'react'
import './home.css'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'


const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        <div className="containet">
          Home 
        </div>
      </div>
    </div>
  )
}

export default Home