import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login-page/login-page'
import HomePage from './pages/home-page/home-page'
import NotFoundPage from './pages/error-pages/notfound-page'

import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/sign-in/' element={<LoginPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
