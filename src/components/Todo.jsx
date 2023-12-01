import React, { useEffect, useState } from 'react'
import { deleteTodo, getATask, getTodo, uploadTodo } from '../services/allAPI';
import Card from 'react-bootstrap/Card';

function Todo() {
  const [todo,setTodo] = useState([])

  //dragover eventlistener
  const dragOver =(e)=>{
    e.preventDefault()
    console.log('inside dragover');
  }

  const taskDrop = async(e)=>{
    const taskid = e.dataTransfer.getData('taskID')
    //console.log(`dropped inside ${Todo}`);
    console.log(taskid);

    //function to get dragged task
    const {data} = await getATask(taskid)
    console.log(data);
    uploadTodo(data);
  }

  const getAllTodo = async ()=>{
    const response = await getTodo()
    //console.log(response);
    const {data}= response
    //console.log(data);
    setTodo(data)
  }
  //console.log(todo);

  const removeTodo = async (id)=>{
    const response = await deleteTodo(id)
    console.log(response);
  }

  useEffect(()=>{
    getAllTodo()
  },[todo])

  return (
    <div className='bg-warning border rounded m-2' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>taskDrop(e)}>
      <h3 className='text-center mt-5'>Todo</h3>
      {todo?.length>0?
        todo?.map((item)=>(
          <Card className='d-flex flex-row m-3'>
            <Card.Body>{item.taskname}</Card.Body> 
            <button className='btn' onClick={()=>removeTodo(item.id)}><i class="fa-solid fa-trash"></i></button>
          </Card>
        )):<p>Nothing to display</p>
        
      } 
    </div>
  )
}

export default Todo