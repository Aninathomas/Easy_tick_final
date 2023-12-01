import React, { useEffect, useState } from 'react'
import { deleteDone, getATask, getDone, uploadDone } from '../services/allAPI';
import Card from 'react-bootstrap/Card';

function Done() {
  const [done,setDone] = useState([])

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
    uploadDone(data);
  }

  const getAllDone = async ()=>{
    const response = await getDone()
    //console.log(response);
    const {data}= response
    //console.log(data);
    setDone(data)
  }
  //console.log(todo);

  const removeDone = async (id)=>{
    const response = await deleteDone(id)
    console.log(response);
  }

  useEffect(()=>{
    getAllDone()
  },[done])

  return (
    <div className='bg-warning border rounded m-2'  droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>taskDrop(e)}>
      <h3 className='text-center mt-5'>Finished</h3>
      {done?.length>0?
        done?.map((item)=>(
          <Card className='d-flex flex-row m-3'>
            <Card.Body>{item.taskname}</Card.Body> 
            <button className='btn' onClick={()=>removeDone(item.id)}><i class="fa-solid fa-trash"></i></button>
          </Card>
        )):<p>Nothing to display</p>
        
      } 
    </div>
  )
}

export default Done