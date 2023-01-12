import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import IPBH from './pages/IPBH'
import RRL from './pages/RRL'
import VOLS from './pages/VOLS'
import RTS from './pages/RTS'
import Other from './pages/Other'
import './scss/App.scss'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/ipbh' element={<IPBH />} />
        <Route path='/rrl' element={<RRL />} />
        <Route path='/vols' element={<VOLS />} />
        <Route path='/rts' element={<RTS />} />
        <Route path='/other' element={<Other />} />
      </Route>rrl
    </Routes>
  )
}
