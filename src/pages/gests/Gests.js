import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import userdata from '../../components/userdata/userdata'

const Gests = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        <div className="gest-containet">
          <div>
            {userdata.map(userdata=>(
              <div>
              <span>{userdata.room_number}</span>
              <span> {userdata.user_id}</span>
              <span> {userdata.name}</span>
              <span> {userdata.surname}</span>
              <span> {userdata.phone_number}</span>
              <span> {userdata.price}TL </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gests