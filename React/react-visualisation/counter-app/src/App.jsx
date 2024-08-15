//hook
import { useState } from "react";

// state, components

function App() {
  const [count,setCount] = useState(0);

  return(
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

//component
function CustomButton(props){
  
  function onClickHandler(){
    //count++; -> not the right way to set state variables
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}
export default App
