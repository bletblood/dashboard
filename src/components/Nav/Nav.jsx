import React, { useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {  Navbar, NavDropdown, Container } from 'react-bootstrap'

import { LinkPages } from '../../static'

import './Nav.scss'

export default function Nav(params) {
  const { logo } = params
  const location = useLocation()
  const [title, setTitle] = useState('Главная')

  const handleStyle = ({isActive}) => isActive ? {marginLeft: '.5rem', marginRight: '.5rem', color: 'green', textDecoration: 'none'} : {marginLeft: '.5rem', marginRight: '.5rem', color: 'black', textDecoration: 'none'}
  const handleTitle = e => setTitle(e.target.innerText)
  const fetchNavLink = useMemo(() => {
    return LinkPages.filter(el => location.pathname.includes(el.parent) ).map((i, idx) => {
      return <NavLink key={idx} to={i.parent + i.path} style={handleStyle} onClick={handleTitle}>{i.name}</NavLink>
    })
  }, [location])
  
  return (
    <Navbar collapseOnSelect sticky="top" bg="grey" className='shadow-sm'>
      <Container fluid>
        <Navbar.Brand>{logo}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {
            location.pathname !== '/' ?
              <NavDropdown title={title} id="nav-dropdown">
                { fetchNavLink }
              </NavDropdown>
            :
            <></>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
