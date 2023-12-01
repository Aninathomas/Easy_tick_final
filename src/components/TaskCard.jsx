import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { deleteTask, getAllTask } from '../services/allAPI';



function TaskCard() {

  const [allTask,setAllTask]=useState([])

  //function to upload task
  const getAlluploadedTask = async ()=>{
    const response = await getAllTask()
    //console.log(response);
    const {data}= response
    //console.log(data);
    setAllTask(data)
  }
  //console.log(allTask);

  //function to delete task
  const removeTask = async (id)=>{
    const response = await deleteTask(id)
    console.log(response);
  }

  useEffect(()=>{
    getAlluploadedTask()
  },[allTask])

  const dragStarted = (e,id)=>{
    console.log(`card ${id} dragging`);
    e.dataTransfer.setData('taskID',id)
  }

  return (
    <div className='p-5'>
      <Row className=''>
        {allTask.length>0?
        allTask?.map((task)=>(
          <Col md={3} lg={3} sm={12} className='mb-3'>
        <Card style={{ width: '18rem', height:"300px"}} className='bg-dark'  draggable onDragStart={(e)=>dragStarted(e,task.id)}>
        <Card.Body className='shadow '>
       <div style={{marginTop:"20px"}} className='bg-info rounded border text-light w-50 mb-5 '>
            <Card.Title className='d-flex align-items-center justify-content-center'>
                {task.taskname}
            </Card.Title>
       </div>
        <div style={{marginTop:"50px"}} className='bg-light'>
            <Card.Text>
             {task.description}
             </Card.Text>
        </div>
        <div style={{marginTop:"40px"}} className='d-flex justify-content-end'>
             <button className='btn bg-danger ' onClick={()=>removeTask(task.id)}><i class="fa-solid fa-trash"></i></button>
             <button className='btn bg-primary ms-3' ><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
      </Card.Body>
    </Card>
        </Col>
        ))
          :
        <p className='me-2'> Nothing to display</p>
        }
      </Row>

    </div>
  )
}

export default TaskCard