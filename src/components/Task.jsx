import React from 'react'
import TaskCard from './TaskCard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { uploadAllTask } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TaskUpdation from './TaskUpdation';


function Task() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //state to store task details
  const [tasks,setTasks] = useState({
    taskname:'',
    description:''
  })

  console.log(tasks);
  
  const hadleUpload = async ()=>{
    const {taskname,description} = tasks
    if(!taskname || !description){
      toast.warning('please fill the form completely')
      handleClose()
    }else{
     const response = await uploadAllTask(tasks)
     console.log(response);


     //console.log(response.status);
     if(response.status>=200 && response.status<300){
      toast.success(`${response.data.taskname} uploaded successfully`)

      setTasks({
        taskname:'',
        description:''
      })

      handleClose()
     }else{
      toast.error('something went wrong try again later')
      handleClose()
     }
    
    }

  }


  return (
    
    <>

     <div className='container d-flex me-4 mt-5'>
       <h2 className='mt-5'>Add New Task</h2>
       <button className='btn mt-5' onClick={handleShow}><i class="fa-solid fa-floppy-disk fa-2xl"></i></button>
     </div>

     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Enter the task"
                autoFocus
                onChange={(e)=>setTasks({...tasks,taskname:e.target.value})}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control 
              as="textarea" rows={3} 
              onChange={(e)=>setTasks({...tasks,description:e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={hadleUpload}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     <div>
        <TaskCard/>
     </div>
     <div className='w-100'>
      <TaskUpdation/>
     </div>
    <ToastContainer position='top-center' theme='light' autoClose={2000}/>

    </>
  )
}

export default Task