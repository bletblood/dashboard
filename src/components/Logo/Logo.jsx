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
        <Dropdown.Item href="/">Главная страница</Dropdown.Item>
        <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
        <Dropdown.Item href="/msv">MSV</Dropdown.Item>
        <Dropdown.Item href="/twamp">TWAMP</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Logo