import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import './stle.css'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Loginn() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate =useNavigate();
  function Register(){
    navigate("/register");
  }
  

    function handleClick(){
      // navigate("/s1")
      const obj = {
        email: email,
        password : password,
      };
      console.log(obj)
      axios
        .post(
          "http://localhost:8000/api/user/admin/auth",
          obj,
          
        )
        .then((res) => {
          const data = res;
          console.log(data)
          console.log(data.data.status);
          //console.log(data.data.data);
          if (data.data.status == 'success') {
             navigate("/s1");
            console.log("success");
            localStorage.setItem("login","yes")
           }
           else{
            console.log("error")
           }
        })
        .catch((err) => {
          console.log(err);
          // issetError(true);
          // setError(err.response.data.msg);
          // throw err.response.data.msg;
        });
    }
    localStorage.setItem("login","no")
  return (
    <p className='app'>
      <p className='space'></p>
      <p><br/>
    <Box sx={{
      backgroundColor:'#fff',
      color:'white',
      height:'260px',
      width:'200px',
      padding:'16px',
      border:'3px dashed grey',
      borderRadius:2,
      borderColor:"orange",
      boxShadow:2,
    
    
    }}>
  
    <div>
      <p className='a'>
      <TextField id="email" label="Email" color="grey" focused  onChange={(e)=>setEmail(e.target.value)}/>
      </p>
      <p>
      <FormControl  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e)=>setPassword(e.target.value)}
            endAdornment={
              <InputAdornment >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </p>
        <p>
        <Button variant='contained' onClick={Register}>Register</Button>
        </p><p><Button variant='contained' onClick={handleClick}>LogIn</Button>
          </p>
    </div>
    
    </Box>
    </p>
    </p>
  )
}

export default Loginn
