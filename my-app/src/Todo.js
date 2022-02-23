
import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './App.css';
import Button from '@mui/material/Button';
import db from './firebase';
import { toast } from 'react-toastify';
const TodoList = ({todo,status,like,id}) => {

    //update
    const toggleProgress=()=>
    {
         db.collection("todos").doc(id).update({
             status:!status
         })
        
    }

    //delete

    const deleteTodo=()=>{
        db.collection("todos").doc(id).delete();
        toast.success("Task deleted")
    }
  return (
   
    <div className="App" style={{display:"flex"}}>
            
    <ListItem>
    <ListItemText primary={todo} secondary={status  ? "not done" : "complete"} />
    </ListItem>
    <Button onClick={toggleProgress}>{status ? "Done" : "unDone"}</Button>
    <Button onClick={deleteTodo}>X</Button>
    </div>
  )
}

export default TodoList