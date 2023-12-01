import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Todo from './Todo'
import OnProgress from './OnProgress'
import Done from './Done'

function TaskUpdation() {
  return (
    <div className='w-100'>
     <div>
            <h1 className='d-flex justify-content-center mb-5'>Task</h1>
     </div>
          <div className='w-100'>
            <Row>
              <Col md={6} lg={4}>
                <Todo/>
              </Col>
              <Col md={6} lg={4}>
                <OnProgress/>
              </Col>
              <Col md={6} lg={4}>
                <Done/>
              </Col>
            </Row> 
          </div> 
    </div>
  )
}

export default TaskUpdation