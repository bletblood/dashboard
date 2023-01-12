import React from 'react'
import './Logo.scss'
import LogoPNG from '../../assets/Logo.png'

const Logo = () => {
  return (
    <div className='box'>
      <img src={LogoPNG} alt="" />
    </div>
  )
}

export default Logo