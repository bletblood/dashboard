import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import GraphsPage from './pages/GraphsPage'
import OtherPage from './pages/OtherPage'
import './scss/App.scss'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/ipbh' element={<GraphsPage url='ipbh' />} />
        <Route path='/rrl' element={<GraphsPage url='rrl' />} />
        <Route path='/vols' element={<GraphsPage url='vols' />} />
        <Route path='/rts' element={<GraphsPage url='rts' />} />
        <Route path='/other' element={<OtherPage />} />
      </Route>rrl
    </Routes>
  )
}
