import React, { useEffect, useState } from 'react'
import { deleteProgress, getATask, getprogress, uploadProgress } from '../services/allAPI';
import Card from 'react-bootstrap/Card';


function OnProgress() {
  const [progress,setProgress] = useState([])

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
    uploadProgress(data);
  }

  const getAllProgress = async ()=>{
    const response = await getprogress()
    //console.log(response);
    const {data}= response
    //console.log(data);
    setProgress(data)
  }
  //console.log(todo);

  const removeProgress = async (id)=>{
    const response = await deleteProgress(id)
    console.log(response);
  }

  useEffect(()=>{
    getAllProgress()
  },[progress])

  return (
    <div className='bg-warning border rounded m-2'  droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>taskDrop(e)}>
      <h3 className='text-center mt-5'>On Progress</h3>
      {progress?.length>0?
        progress?.map((item)=>(
          <Card className='d-flex flex-row m-3'>
            <Card.Body>{item.taskname}</Card.Body> 
            <button className='btn' onClick={()=>removeProgress(item.id)}><i class="fa-solid fa-trash"></i></button>
          </Card>
        )):<p>Nothing to display</p>
        
      } 
    </div>
  )
}

export default OnProgress