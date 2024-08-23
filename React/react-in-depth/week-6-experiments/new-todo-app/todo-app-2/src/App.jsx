import { Fragment, useState } from 'react'
import React from 'react';
import './App.css'

function App() {

  const[todos,setTodos] = useState([{
    
    id:1,
    title:"go to gym",
    description:"go to gym today"
  },{
    id:2,
    title:"go to work",
    description:"go to work today"
  },{
    id:3,
    title:"go to school",
    description:"go to school today"
  }]);

  function addTodo(){
    setTodos([...todos,{
      id:4,
      title:"go to market",
      description:"go to market today"

    }])
  }
  
  return <div>

    <button onClick={addTodo}>Add Todo</button>

    {todos.map(todo=> <Todo key={todo.id} title={todo.title} description={todo.description}/>)}

  </div>
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App
