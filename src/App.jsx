import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login-page/login-page'
import HomePage from './pages/home-page/home-page'
import SignUpPage from './pages/sign-up-page/sign-up-page'
import NotFoundPage from './pages/error-pages/notfound-page'

import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/sign-in/' element={<LoginPage/>}/>
        <Route path='/sign-up/' element={<SignUpPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
