import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/error-pages/notfound-page'
import OfferedCoursesPage from './pages/courses-page/offered-courses'
import PageSpinner from './components/spinners/page-spinner'

const LoginPage = React.lazy(() => (import('./pages/login-page/login-page')))
const SignUpPage = React.lazy(() => (import('./pages/sign-up-page/sign-up-page')))
const HomePage = React.lazy(() => (import('./pages/home-page/home-page')))

import './App.css'

const defaultUrl = 'http://localhost:5000/'

const App = () => {
  return (
    <>
      <React.Suspense fallback={<PageSpinner/>}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/sign-in/' element={<LoginPage defaultUrl={defaultUrl}/>}/>
          <Route path='/sign-up/' element={<SignUpPage defaultUrl={defaultUrl}/>}/>
          <Route path='/offered-courses/' element={<OfferedCoursesPage defaultUrl={defaultUrl}/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </React.Suspense>
    </>
  )
}

export default App
