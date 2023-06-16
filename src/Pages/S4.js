import { AppBar,Toolbar, Typography,Stack,Button } from "@mui/material";
import { Link ,useNavigate} from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./stle.css"
import dayjs from "dayjs";
import TextField from '@mui/material/TextField'
import exportFromJSON from "export-from-json";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
function Home(){
  const verify= localStorage.getItem("login")
  console.log(verify)
  const [discountprice,setPrice]=React.useState('')
  const [discountvalue,setDiscount]=React.useState('')
  const [value, setValue] = React.useState(dayjs('07-06-2023'));
  const [end, setEnd] = React.useState(dayjs('07-06-2023'));
  const Starting= (dayjs(value.$d).format('YYYY-MM-DD'))
  const Ending= (dayjs(end.$d).format('YYYY-MM-DD'))
  const [bikeprice,setBike]=React.useState('')
  const [biketime,setT]=React.useState('')
  console.log(Starting);
  console.log(Ending);
  localStorage.setItem("change","no")
  
    function discountupdate(event){
      localStorage.setItem("change","yes")
      setDiscount(event.target.value)
    
      
   
  }
  console.log(discountvalue)
  const navigate =useNavigate();
    function handleClick(){
      navigate("/")
      localStorage.setItem("login","no")
    };
    function loginnn(){
      navigate("/")
    };
    const Generate=()=>{
      const obj = {
      startDate: Starting,
        endDate: Ending,
        location:"Subhas Bridge",
       };
       
       console.log(obj)
       axios
         .post(
           "http://localhost:8000/api/user/admin/report",
           obj,
           
         )
         .then((res) => {
         const data1=res;
         console.log(data1.data.results)
         const data=data1.data.results
    const fileName="Upadte"
    const exportType = exportFromJSON.types.csv
    exportFromJSON({ data, fileName,fields:["name","user_email","bikeId","userId","start_time","end_time","date","numberOfBike","cost"],exportType})
         })
     

    };
    function discountclick(){
      const obj = {
       reason : discountvalue,
       location : "Subhas Bridge",
       prize : Number(discountprice)
      };
      console.log(obj)
      axios
        .post(
          "http://localhost:8000/api/user/admin/bikediscount",
          obj,
          
        )
    }
    function updateprice(){
      const obj = {
        rate :Number(bikeprice),
        location : "Subhas Bridge",
        minutes :Number(biketime)
       };
       console.log(obj)
       axios
         .post(
           "http://localhost:8000/api/user/admin/bikecost",
           obj,
           
         )
     
    }
    if (verify=="yes"){
  return(
    
      <box>
        
        <AppBar position="static" sx={{
          backgroundColor:"#003f5c",
        }}>
            <Toolbar>
                <Typography variant="h6" component='div' sx={{flexGrow:1}}><div style={{color:"orange"}}>BOOZ</div></Typography>
            <Stack direction="row" spacing={2}>
                <Link to="/s1"> <Button sx={{
             "&.MuiButton-text":{color:"orange"}
            }}>Atal Bridge</Button></Link>
            <Link to="/s2"><Button sx={{
             "&.MuiButton-text":{color:"orange"}
            }}>Kankariya</Button>
            </Link>
            <Link to="/s3"><Button sx={{
             "&.MuiButton-text":{color:"orange"}
            }}>Paldi</Button>
            </Link>
            <Link to="/s4"><Button sx={{
             "&.MuiButton-text":{color:"orange"}
            }}>Subhas Bridge</Button>
            </Link>
            <Link to="/s5"><Button sx={{
             "&.MuiButton-text":{color:"orange"}
            }}>Vallabh Sadan</Button>
            </Link>
            <Button variant="outlined" sx={{
              
              color:"orange",
            }} onClick={handleClick}>Logout</Button>
            </Stack>
            </Toolbar>
            
        </AppBar>
        
        <div className="bapp"><br/>
        Subhas Bridge
        <div className="capp">
        <Grid container spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center">
          
    <Grid item>
      <Box sx={{
      backgroundColor:'#F0FFFF',
      color:'white',
      height:'260px',
      width:'300px',
      padding:'10px',
      border:'1px dashed grey',
      borderRadius:1,
      boxShadow:2}}>
        <div>
        <div className="a">Pricing</div>
      <p className='a'>
      <TextField id="Minutes" label="Minutes" color="grey" focused  onChange={(e)=>setT(e.target.value)}/>
      </p>
      <p>
      <p className='a'>
      <TextField id="Price" label="Price" color="grey" focused  onChange={(e)=>setBike(e.target.value)}/>
      </p>
      <p></p>
        </p>
        <p>
        <Button variant='contained' onClick={updateprice}>UPdate</Button>
          </p>
    </div>
    
      </Box>
    </Grid>
    <Grid item>
      <Box sx={{
      backgroundColor:'#F0FFFF',
      color:'white',
      height:'260px',
      width:'300px',
      padding:'10px',
      border:'1px dashed grey',
      borderRadius:1,
      boxShadow:2}}>
        <div>
        <div className="a">Discount</div>
      <p className='a'>
      <FormControl sx={{width:"220px",border:"1px solid lightgray",borderRadius:"5px"}}>
        <InputLabel id="discount-label">Discount</InputLabel>
        <Select
          labelId="discount-label"
          id="discount"
          value={discountvalue}
          label="Discount"
          onChange={discountupdate}
        >
          <MenuItem value={"battery"}>Battery Dead</MenuItem>
          <MenuItem value={"timing"}>Timing Issue</MenuItem>
          <MenuItem value={"marketin"}>Marketin</MenuItem>
        </Select>
      </FormControl>
      </p>
      <p>
      <p className='a'>
      <TextField id="DiscountPrice" label="Discount Price" color="grey" focused onChange={(e)=>setPrice(e.target.value)} />
      </p>
      <p></p>
        </p>
        <p>
        <Button variant='contained' onClick={discountclick}>UPdate</Button>
          </p>
    </div>
   
    
      </Box>
    </Grid>
    <Grid item>
          <Box sx={{
      backgroundColor:'#F0FFFF',
      color:'white',
      height:'260px',
      width:'300px',
      padding:'10px',
      border:'1px dashed grey',
      borderRadius:1,
      boxShadow:2,
      justifyContent:"center",
        alignItems:"center",}}>
          <div className="a">
        <div className="a">RIDE HISTORY</div>
        <p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      
      <DatePicker
      format="DD/MM/YYYY"
          label="Starting Date:"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      
    </LocalizationProvider>
    </p>
    <p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      
      <DatePicker
      format="DD/MM/YYYY"
          label="Ending Date:"
          value={end}
          onChange={(newValue) => setEnd(newValue)}

        />
      
    </LocalizationProvider>
    </p>
    <p>
      
        <Button variant='contained' onClick={Generate}>Generate</Button>
          </p>
          
          </div>
    </Box>
    </Grid >
    </Grid>
    </div>
      </div>
        </box>
 )}
 else{
  return(
    <div className="app" style={{color:"orange"}}><p>Please login first</p><p><Button variant="outlined" sx={{color:"orange"}} onClick={loginnn}>LogIn</Button></p></div>
  )
}
  }
 
  

export default Home;