import React from 'react'
import Notes from './Notes'
import './notelist.css'

const NoteList = () => {
  return (
    <div className='notlist-containet'>
      <Notes/>
      <Notes/>
      <Notes/>
      <Notes/> 
    </div>
  )
}

export default NoteList
