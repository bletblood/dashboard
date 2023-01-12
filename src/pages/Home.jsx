import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MixBarChart, MixLineBarChart } from '../components/Graphs'

const Home = (params) => {
  return (
    <>
      <Container fluid>
        <Row className='d-flex justify-content-center'>
          <Col sm='4'>
            <Link to='/ipbh' className='content'>
              <MixLineBarChart width={window.innerWidth / 3.25}>
                <span className='content-text'>IPBH</span>
              </MixLineBarChart>
            </Link>
          </Col>
          <Col sm='4'>
            <Link to='/rrl' className='content'>
              <MixLineBarChart width={window.innerWidth / 3.25}>
                <span className='content-text'>RRL</span>
              </MixLineBarChart>
            </Link>
          </Col>
          <Col sm='4'>
            <Link to='/vols' className='content'>
              <MixLineBarChart width={window.innerWidth / 3.25}>
                <span className='content-text'>VOLS</span>
              </MixLineBarChart>
            </Link>
          </Col>
          <Col sm='4'>
            <Link to='/rts' className='content'>
              <MixLineBarChart width={window.innerWidth / 3.25}>
                <span className='content-text'>RTS</span>
              </MixLineBarChart>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home