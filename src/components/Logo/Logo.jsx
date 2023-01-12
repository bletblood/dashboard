import React from 'react'
import { Dropdown } from 'react-bootstrap'
import './Logo.scss'
import LogoPNG from '../../assets/Logo.png'

const Logo = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle className='box'>
        <img src={LogoPNG} alt="" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Logo