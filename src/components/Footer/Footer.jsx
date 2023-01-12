import React from 'react'
import './Footer.scss'

export default function Footer(params) {
  const { children } = params
  return (
    <div className='footer'>
      <div>Footer, {children}</div>
    </div>
  )
}
