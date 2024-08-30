import { useEffect, useState } from 'react'

function App() {

  const [counter,setCounter] = useState(0);
  const [inputValue,setInputValue] = useState(1);

  let count=0;
  for(let i=1;i<=inputValue;i++){
    count=count + i;
  }
  // if user input 3, compute sum from 1 to 3 and counter++

  return (
    <>
    <input onChange={function(e){
      setInputValue(e.target.value);
    }} placeholder='Enter a number'></input> <br></br>
    Sum from 1 to {inputValue} is {count}
    <br></br>
    <button onClick={()=>{setCounter(counter+1)}}>Count is {counter}</button>
    </>
  )
}


export default App
