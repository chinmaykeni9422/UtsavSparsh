import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom"
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Template from './components/Template/Template'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import ShowCategory from './components/ShowCategory/ShowCategory'

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element = {<Layout />}>
        <Route path= '' element = {<Home />} />
        <Route  path='signup' element={<Signup/>}/>
        <Route  path='login' element={<Login/>}/>
        <Route path= 'template' element = {<Template />} />
        <Route path= ':category' element = {<ShowCategory />} />
        <Route path= 'template/:category' element = {<ShowCategory />} />
        <Route path= 'about' element = {<About />} />
        <Route path= 'contact' element = {<Contact />} />
      </Route>
    )
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
