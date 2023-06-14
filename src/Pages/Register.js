import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [cpassword, setCPassword] = React.useState("");
  const [location,setLocation]=React.useState();
  localStorage.setItem("change","no")
  function locationupdate(event){
    localStorage.setItem("change","yes")
    setLocation(event.target.value)
  
    
 
}
console.log(location)
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
    const navigate =useNavigate();
    
    function handleClick(){
      // navigate("/s1")
      const obj = {
        email: email,
        password : password,
        name: name,
        password_confirmation: cpassword,
        location:location,
      };
      console.log(obj)
      axios
        .post(
          "http://localhost:8000/api/user/admin/register",
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

        });localStorage.setItem("login","yes")
    }
    localStorage.setItem("login","no")
  return (
    
    <p className='app'>
     
     <p style={{width:"250px"}}></p>   
     <p> <br/>
     <br/>
     <br/>
     <br/><br/><br/><br/><br/><br/>
    <Box sx={{
      backgroundColor:'white',
      color:'white',
      height:'480px',
      width:'280px',
      padding:'5px',
      border:'3px dashed orange',
      borderRadius:2,
      boxShadow:2
    
    
    }}>
  <Button onClick={()=>navigate("/")}>Back</Button>
    <div>
    <p className='a'>
      <TextField id="name" label="Name" color="grey" focused  onChange={(e)=>setName(e.target.value)} sx={{
        width:'250px'
      }}/>
      </p>
      <p className='a'>
      <TextField id="email" label="Email" color="grey" focused  onChange={(e)=>setEmail(e.target.value)} sx={{
        width:'250px'
      }}/>
      </p>
      <p className='a'>
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
        <FormControl  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password Conformation</InputLabel>
          <OutlinedInput
            id="cpassword"
            type={showPassword ? 'text' : 'password'}
            onChange={(e)=>setCPassword(e.target.value)}
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
          
        
     
        </FormControl></p><p>
        <FormControl sx={{width:"250px",}}>
        <InputLabel id="location-label">Location</InputLabel>
        <Select
          labelId="location-label"
          id="location"
          value={location}
          label="location"
          onChange={locationupdate}
        >
          <MenuItem value={"Atal Bridge"}>Atal Bridge</MenuItem>
          <MenuItem value={"Kankariya"}>Kankariya</MenuItem>
          <MenuItem value={"Paldi"}>Paldi</MenuItem>
          <MenuItem value={"Subhas Bridgs"}>Subhas Bridgs</MenuItem>
          <MenuItem value={"Vallabh Sadan"}>Vallabh Sadan</MenuItem>
        </Select>
        </FormControl>
        </p>
        <p>
        <Button variant='contained' onClick={handleClick}>SigIn</Button>
          </p>
    </div>
    
    </Box>
    </p>
    </p>
  )
}

export default Register
