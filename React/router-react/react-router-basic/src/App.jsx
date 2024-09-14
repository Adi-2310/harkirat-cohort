import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import { lazy, Suspense } from 'react';
const Dashboard = lazy(()=>import('./components/Dashboard')); // send Dashboard ka package only when you go on Dashboard endpoint, sab ek saath nahi bhejega
const Landing = lazy(()=>import('./components/Landing'));

// While lazy loading you have to use Suspense 

function App() {

  return (
    <div>
    <BrowserRouter>
    <Appbar/>  {/*//whatver uses the useNavigate hook needs to be inside BrowserRouter  */}
    <Routes>
      <Route path = "/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
      <Route path = "/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
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
