import { useState } from 'react'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'


function App() {

  return (
    <div>
    <BrowserRouter>
    { <Appbar/>  /*whatver uses the useNavigate hook needs to be inside BrowserRouter */}
    <Routes>
      <Route path = "/dashboard" element={<Dashboard/>}/>
      <Route path = "/" element={<Landing/>}/>
    </Routes>

    </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
   return <div>
   <div>
  <button onClick={()=>{
    navigate("/");
  }}>
    Landing page
  </button>
  <button onClick={()=>{
    navigate("/dashboard");
  }}>
    Dashboard
  </button>
  </div> 
  </div>
}


export default App
