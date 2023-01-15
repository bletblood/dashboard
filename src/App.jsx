import React from 'react'
import { Outlet, useRoutes } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import MainPage from './pages/MainPage'
import GraphsPage from './pages/GraphsPage'
import OtherPage from './pages/OtherPage'
import './scss/App.scss'

export default function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "dashboard",
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <MainPage />,
            },
            {
              path: "ipbh",
              element: <GraphsPage url='ipbh' />,
            },
            {
              path: "rrl",
              element: <GraphsPage url='rrl' />,
            },
            {
              path: "vols",
              element: <GraphsPage url='vols' />,
            },
            {
              path: "rts",
              element: <GraphsPage url='rts' />,
            },
          ]
        },
        {
          path: "msv",
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <MainPage />,
            },
            {
              path: "esrp",
              element: <GraphsPage url='esrp' />,
            },
          ]
        },
        {
          path: "twamp",
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <GraphsPage url='twamp' />,
            },
          ]
        },
      ],
    },
  ]);

  return element;
}
