import React from 'react'
import { Col, Row } from 'react-bootstrap'
import mainimage from '../icons/13839449_5348666.jpeg'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <>
    <div  style={{backgroundColor:'#f9f7f8'}} >
<Row className="mt-5 mb-0 d-flex justify-content-evenly align-items-center w-100">
    
    <Col md={6} className='mt-5'>
    <h2 >
            The best Solution 
            For Your <span className="text-warning">Busy Life</span>
          </h2>
          <Link to={'/task'} className="btn btn-warning">
            Get Started <i class="fa-solid fa-arrow-right"></i>
          </Link>
    </Col>
    <Col md={5} className='mt-5'>
        <img style={{width:'100%'}} src={mainimage} alt='no-image'></img>
    </Col>
</Row>
</div>
    </>
  )
}

export default Landingpage