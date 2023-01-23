import React, { useMemo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

import { MixBarChart, MixLineBarChart } from '../components/Graphs'
import { LinkPages } from '../static'

import "./MainPage.scss"

const MainPage = (params) => {
  const location = useLocation()
  const page = LinkPages.filter(key => key.parent === location.pathname)

  const fetchColLink = useMemo(() => {
    const fetchTypeChart = (params) => {
      const { homeType, type, name, path, parent } = params
      switch (homeType) {
        case 'multiple':
          return (
            <div className="content-multiple">
              <span className='content-multiple-text'>{name}</span>
              <div className="content-multiple-chartgroup">
                <Link to={parent + path + "?type=plan"} className='chartgroup-link'>
                  <MixLineBarChart width={window.innerWidth / 7.25} />
                </Link>
                <Link to={parent + path + "?type=cp"} className='chartgroup-link'>
                  <MixBarChart width={window.innerWidth / 7.25} />
                </Link>
              </div>
            </div>
          )
      
        case 'single':
          if(type === 'bar') {
            return (
              <Link to={parent + path} className='content'>
                <MixBarChart width={window.innerWidth / 3.25}>
                  <span className='content-text'>{name}</span>
                </MixBarChart>
              </Link>
            )
          }
          return (
            <Link to={parent + path} className='content'>
              <MixLineBarChart width={window.innerWidth / 3.25}>
                <span className='content-text'>{name}</span>
              </MixLineBarChart>
            </Link>
          )
          
        default:
          break;
      }
    }

    return page.map((i, idx) => {
      return (
        <Col key={idx} sm='4'>
          { fetchTypeChart(i) }
        </Col>
      )
    })
  }, [page])

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