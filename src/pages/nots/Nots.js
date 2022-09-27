import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import NoteList from './notelist/NoteList'

const Nots = () => {
  return (
    <div className='home'>
    <Sidebar/>
    <div className="homecontainer">
      <Navbar/>
      <div className="containet">
        <NoteList/>
      </div>
    </div>
  </div>
  )
}

export default Nots