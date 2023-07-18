import Header from './components/Header';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useState } from 'react';
import Field from './components/Field'
const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  function AllValue() {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  }

  const funEmail = (e) => {
    setEmail(e.target.value)

  }

  const deleteTodo=(index)=>{
  data.splice(index,1)
    setData([...data])
  } 
  return (
    <>
      <Header />
      <div className='input-container'>
        <Stack direction="row" spacing={2}>
          <TextField value={name}  onChange={(event) => { setName(event.target.value) }} id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={email} onChange={funEmail} id="outlined-basic" label="Email" variant="outlined" />
          <Button variant="contained" color="success" onClick={AllValue}>
            <PersonAddIcon />
          </Button>
        </Stack>
      </div>
      <div className='data'>
        <div className='data_val'>
          <h4>NAME</h4>
          <h4>EMAIL</h4>
          <h4>REMOVE</h4>
        </div>
        {data.map((element, index) => (

          <Field key={index + element} name={element.name} email={element.email} index={index}  deleteData = {deleteTodo}/>
        ))}
      </div>
    </>
  )
}
export default App;