import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, NavDropdown, Container, Pagination } from 'react-bootstrap'
import './Nav.scss'

export default function Nav(params) {
  const { logo } = params
  const [title, setTitle] = useState('Начало')
  
  return (
    <Navbar collapseOnSelect sticky="top" bg="grey" className='shadow-sm'>
      <Container fluid>
        <Navbar.Brand>{logo}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavDropdown title={title} id="nav-dropdown">
            <NavLink to='/' className='mx-2 text-decoration-none text-reset' onClick={e => setTitle(e.target.innerText)}>Начало</NavLink>
            <NavLink to='/ipbh' className='mx-2 text-decoration-none text-reset' onClick={e => setTitle(e.target.innerText)}>IPBH</NavLink>
            <NavLink to='/rrl' className='mx-2 text-decoration-none text-reset' onClick={e => setTitle(e.target.innerText)}>РРЛ</NavLink>
            <NavLink to='/vols' className='mx-2 text-decoration-none text-reset' onClick={e => setTitle(e.target.innerText)}>ВОЛС</NavLink>
            <NavLink to='/rts' className='mx-2 text-decoration-none text-reset' onClick={e => setTitle(e.target.innerText)}>РТС</NavLink>
            <NavLink to='/other' className='mx-2 text-decoration-none text-reset' onClick={e => setTitle(e.target.innerText)}>Остальное</NavLink>
          </NavDropdown>
        </Navbar.Collapse>
        <Pagination className='m-0 p-0'>
          <Pagination.First />
          <Pagination.Prev />

          <Pagination.Item>{2020}</Pagination.Item>
          <Pagination.Item>{2021}</Pagination.Item>
          <Pagination.Item>{2022}</Pagination.Item>
          <Pagination.Item active>{2023}</Pagination.Item>

          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Container>
    </Navbar>
  )
}
