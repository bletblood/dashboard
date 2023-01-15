import React, { useMemo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

import { MixBarChart, MixLineBarChart } from '../components/Graphs'
import { LinkPages } from '../static'

const MainPage = (params) => {
  const location = useLocation()

  const fetchColLink = useMemo(() => {
    const fetchTypeChart = (type, name) => {
      if(type === 'bar') {
        return (
          <MixBarChart width={window.innerWidth / 3.25}>
            <span className='content-text'>{name}</span>
          </MixBarChart>
        )
      }
      return (
        <MixLineBarChart width={window.innerWidth / 3.25}>
          <span className='content-text'>{name}</span>
        </MixLineBarChart>
      )
    }

    return LinkPages.filter(el => el.parent === location.pathname ).map((i, idx) => {
      return (
        <Col key={idx} sm='4'>
          <Link to={i.parent + i.path} className='content'>
            { fetchTypeChart(i.type, i.name) }
          </Link>
        </Col>
      )
    })
  }, [location.pathname])
  return (
    <>
      <Container fluid>
        <Row className='d-flex justify-content-center'>
          { fetchColLink }
        </Row>
      </Container>
    </>
  )
}

export default MainPage