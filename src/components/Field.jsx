import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
const Field = ({name,email,index,deleteData}) => {
  return (
    <>
    <div className='data_val'>
    <h4>{name}</h4>
    <h4>{email}</h4>
    <h4><Button variant="outlined" color="error">
    <DeleteIcon onClick={()=>deleteData(index)}/>
  </Button></h4>
  </div>
    
    </>
  )
}

export default Field