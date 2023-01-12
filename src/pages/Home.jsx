import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MixBarChart } from '../components/Graphs'

const Home = (params) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm='4'>
            <Link to='/ipbh' className='content'>
              <MixBarChart width={window.innerWidth / 3.25}>
                <span className='content-text'>IPBH</span>
              </MixBarChart>
            </Link>
          </Col>
          <Col sm='4'>
            <Link to='/rrl' className='content'>
              <MixBarChart width={window.innerWidth / 3.25}>
                <span className='content-text'>RRL</span>
              </MixBarChart>
            </Link>
          </Col>
          <Col sm='4'>
            <Link to='/vols' className='content'>
              <MixBarChart width={window.innerWidth / 3.25}>
                <span className='content-text'>VOLS</span>
              </MixBarChart>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home