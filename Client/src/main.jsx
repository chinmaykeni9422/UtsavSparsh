import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom"
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
      <Route path= '' element = {<Home />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
