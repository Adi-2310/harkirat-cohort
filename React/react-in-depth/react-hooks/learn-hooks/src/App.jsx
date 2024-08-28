import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {


  return (
    <>
    <Todo id={1}/>
    </>
  )
}

function Todo({id}){
    const [todo,setTodos] = useState({});

    useEffect(()=>{
      axios.get("https://sum-100xdevs.com/todos/id="+ id)
      .then(function(response){
        setTodos(response.data.todo)
      })
    },[]);

    return <div>
      {todo.title}

      {todo.description}

    </div>
}

export default App
