import { useContext, useState } from 'react' 
import './App.css'
import { Countcontext } from './context'

function App() {
  const [count, setCount] = useState(0);

  // wrap anyone that wants to use the teleported value inside a provider 
  return(
    <>
  <Countcontext.Provider value ={count}>
      <Count setCount={setCount}></Count>
  </Countcontext.Provider>
    </>
  )
  
}

function Countrenderer(){
  const count= useContext(Countcontext);

  return <div>
    {count}
  </div>
}

function Count({setCount}){ 
  return <div>
    <Countrenderer/>

     <Buttons setCount={setCount}></Buttons>  {/*Even though Count doesnt need setCount because of Buttons(its child), you have to pass it down through Count which is called prop drilling. Code become difficult to read when this happens and you have 10 states */}
  </div>
}

// Context API passes down the states directly to a lower child component without having it pass through all its parents which do not need it

function Buttons({setCount}){

  const count = useContext(Countcontext);

  return <div> 
  <button onClick={()=>{
    setCount(count+1); 
  }}>Increase</button>

  <button onClick={()=>{
    setCount(count-1);
  }}>Decrease </button>
  </div>
}

export default App
