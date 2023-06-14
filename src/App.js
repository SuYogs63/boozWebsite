
import './App.css';
import { Route,Routes} from 'react-router-dom';
import Home from './Pages/Home'
import Loginn from './Pages/Loginn'
import S2 from './Pages/S2'
import S3 from './Pages/S3'
import S4 from './Pages/S4'
import S5 from './Pages/S5'
import Register from './Pages/Register'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loginn/ >}/>
        <Route path="/s1" element={<Home/ >}/>
        <Route path="/s2" element={<S2/ >}/>
        <Route path="/s3" element={<S3/ >}/>
        <Route path="/s4" element={<S4/ >}/>
        <Route path="/s5" element={<S5/ >}/>
        <Route path="/register" element={<Register/ >}/>
      </Routes>
      
    </div>
  );
}

export default App;
