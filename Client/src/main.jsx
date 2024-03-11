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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element = {<Layout />}>
        <Route path= '' element = {<Home />} />
<<<<<<< HEAD
        <Route path= 'Template' element = {<Template />} />
        <Route path= 'About' element = {<About />} />
        <Route path= 'Contact' element = {<Contact />} />
        <Route  path='signup' element={<Signup/>}/>
        <Route  path='login' element={<Login/>}/>
=======
        <Route path= 'template' element = {<Template />} />
        <Route path= 'about' element = {<About />} />
        <Route path= 'contact' element = {<Contact />} />
>>>>>>> 2912898eaca8844e66c8d30a5b00409e0d4dd998
      </Route>
    )
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
