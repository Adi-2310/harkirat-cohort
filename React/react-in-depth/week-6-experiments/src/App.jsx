import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (

      <Fragment>
        <HeaderwithButton/>
        <Header title="aditya2"></Header>
      </Fragment>
    
  )
}

function HeaderwithButton(){
  const [title, setTitle] = useState("my name is aditya")

  function updateTitle(){
    setTitle("My name is "+ Math.random());
  }

  return <>
    <button onClick={updateTitle}>Update the title</button>
    <Header title={title}></Header>
  </>
}
function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
