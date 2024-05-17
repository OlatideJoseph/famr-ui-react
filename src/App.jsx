import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import NotFoundPage from './pages/error-pages/notfound-page'
import OfferedCoursesPage from './pages/courses-page/offered-courses'
import PageSpinner from './components/spinners/page-spinner'

const LoginPage = React.lazy(() => (import('./pages/login-page/login-page')))
const SignUpPage = React.lazy(() => (import('./pages/sign-up-page/sign-up-page')))
const HomePage = React.lazy(() => (import('./pages/home-page/home-page')))

import './App.css'

const defaultUrl = 'https://nd2project.onrender.com/'

const App = () => {
  const [user, setUser] = React.useState({})
  React.useEffect(()=>{
    let token = localStorage.getItem("refresh_token")
    if (token){
      axios.get(`${defaultUrl}ajax/v1.0/get-auth-data/`,
        {headers:{Authorization: `Bearer ${token}`}})
      .then(resp => resp.data)
      .then(data => {
        setUser(data)
      }).catch(error => {
        console.log(error)
      })
    }
  }, [])
  React.useEffect(()=>{
    console.log(user)
  }, [user])
  return (
    <>
      <React.Suspense fallback={<PageSpinner/>}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/sign-in/' element={<LoginPage user={user} defaultUrl={defaultUrl}/>}/>
          <Route path='/sign-up/' element={<SignUpPage user={user} defaultUrl={defaultUrl}/>}/>
          <Route path='/offered-courses/' element={<OfferedCoursesPage user={user} defaultUrl={defaultUrl}/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </React.Suspense>
    </>
  )
}

export default App
