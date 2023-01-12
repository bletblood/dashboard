import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Navbar, NavDropdown, Container } from 'react-bootstrap'
import './Nav.scss'

export default function Nav(params) {
  const { logo } = params
  const [title, setTitle] = useState('Главная')

  const handleStyle = ({isActive}) => isActive ? {marginLeft: '.5rem', marginRight: '.5rem', color: 'green', textDecoration: 'none'} : {marginLeft: '.5rem', marginRight: '.5rem', color: 'black', textDecoration: 'none'}
  const handleTitle = e => setTitle(e.target.innerText)
  
  return (
    <Navbar collapseOnSelect sticky="top" bg="grey" className='shadow-sm'>
      <Container fluid>
        <Navbar.Brand>{logo}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavDropdown title={title} id="nav-dropdown">
            <NavLink to='/' style={handleStyle} onClick={handleTitle}>Главная</NavLink>
            <NavLink to='/ipbh' style={handleStyle} onClick={handleTitle}>IPBH</NavLink>
            <NavLink to='/rrl' style={handleStyle} onClick={handleTitle}>РРЛ</NavLink>
            <NavLink to='/vols' style={handleStyle} onClick={handleTitle}>ВОЛС</NavLink>
            <NavLink to='/rts' style={handleStyle} onClick={handleTitle}>РТС</NavLink>
            <NavLink to='/other' style={handleStyle} onClick={handleTitle}>Остальное</NavLink>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
