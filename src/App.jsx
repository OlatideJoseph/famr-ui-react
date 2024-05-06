import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login-page/login-page'
import HomePage from './pages/home-page/home-page'

import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/sign-in/' element={<LoginPage/>}/>
      </Routes>
    </>
  )
}

export default App
