import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Nav from './Nav'
import Logo from './Logo'

export default function Layout() {
  return (
    <>
      <Nav logo={<Logo />} />
      <Outlet />
      <Footer>
        dashboard 4.0
      </Footer>
    </>
  )
}
