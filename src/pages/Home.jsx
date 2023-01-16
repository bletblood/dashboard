import React, { useMemo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { LinkProjects } from '../static'
import './Home.scss'

const Home = (params) => {
  const fetchLinks = useMemo(() => {
    return LinkProjects.filter(el => !el.main).map(i => {
      return (
        <Col sm='4'>
          {
            !i.outsider ? 
              <Link to={i.path} className='link'>
                <div className="link-content">
                  <span className="link-content-text">{i.name}</span>
                </div>
              </Link>
            :
              <a href={i.path} className='link' tagret='_blank'>
                <div className="link-content">
                  <span className="link-content-text">{i.name}</span>
                </div>
              </a>
          }
        </Col>
      )
    })
  }, [])

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm='12' className='d-flex justify-content-center align-items-center' style={{height: 'calc(100vh - 102px)'}}>
            <Row>
              { fetchLinks }
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home