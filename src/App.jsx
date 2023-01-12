import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import GraphsPage from './pages/GraphsPage'
import Other from './pages/Other'
import './scss/App.scss'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/ipbh' element={<GraphsPage />} />
        <Route path='/rrl' element={<GraphsPage />} />
        <Route path='/vols' element={<GraphsPage />} />
        <Route path='/rts' element={<GraphsPage />} />
        <Route path='/other' element={<Other />} />
      </Route>rrl
    </Routes>
  )
}
