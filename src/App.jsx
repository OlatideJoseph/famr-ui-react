import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/error-pages/notfound-page'
import PageSpinner from './components/spinners/page-spinner'

const LoginPage = React.lazy(() => (import('./pages/login-page/login-page')))
const SignUpPage = React.lazy(() => (import('./pages/sign-up-page/sign-up-page')))
const HomePage = React.lazy(() => (import('./pages/home-page/home-page')))

import './App.css'

const App = () => {
  return (
    <>
      <React.Suspense fallback={<PageSpinner/>}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/sign-in/' element={<LoginPage/>}/>
          <Route path='/sign-up/' element={<SignUpPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </React.Suspense>
    </>
  )
}

export default App
