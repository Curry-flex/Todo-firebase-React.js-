import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useState ,useEffect} from 'react';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import db from './firebase';
import firebase from 'firebase/compat/app';
import { toast} from "react-toastify"
import TodoList from './Todo';

function App()
{
  const[task,setTask] =useState('')
  const[todos,setTodos] =useState([])
  const[status,setStatus] =useState(true)

  //Add todo
  const addTodo=(e)=>{
    e.preventDefault();
    
    if(!task)
    {
      toast.error("add task")
    }
        else{

          db.collection("todos").add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            todo:task,
            status:status
          })

          toast.success("task added successfully")
        }
     

    setTask("")
  }

  //get todo
  useEffect(()=>{
    getTodo()
  },[])

  const getTodo=()=>{
    
    db.collection("todos").onSnapshot((querySnapshot)=>{
      setTodos(
        querySnapshot.docs.map((doc)=>({
          id:doc.id,
          todo:doc.data().todo,
          status:doc.data().status
        }))
      )
    })
 
  }
return(

  <div className="App"
  style={{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"

  }}
  > 
  <ToastContainer position="top-center" />
  <div>
     <h1>To do Application</h1>
         <form>
         <TextField id="standard-basic" label="Standard" variant="standard"
      value={task}
      onChange={(e)=>setTask(e.target.value)}
      style={{
        maxWidth:"300px",
        width:"90vw"

      }}
     />

    <Button type="submit" variant="outlined" onClick={addTodo}>Add</Button>
         </form>

         {
           todos.map((todo)=> 
            (
              
              <TodoList todo={todo.todo} like={todo.like} status={todo.status} id={todo.id} />
              
             

            )
           )
         }
         </div>
  </div>



)
}



export default App;
