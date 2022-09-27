import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './notes.css'

const Notes = () => {
  return (
    <div className='note-card'>
      <h6>note</h6>
      <span className='notes-date'>27/09/2022</span>
      <span className='notes-icon'><DeleteIcon  /></span>
    </div>
  )
}

export default Notes
