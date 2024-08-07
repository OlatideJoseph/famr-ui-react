import * as React from 'react'
import axios from 'axios'
import { Routes, Route, redirect } from 'react-router-dom'
import NotFoundPage from './pages/error-pages/notfound-page'
import OfferedCoursesPage from './pages/courses-page/offered-courses'
import PageSpinner from './components/spinners/page-spinner'
import NavBar from './components/navbar/navbar'
import Redirect from './pages-component/inheritted/redirect-component'

const LoginPage = React.lazy(() => (import('./pages/login-page/login-page')))
const SignUpPage = React.lazy(() => (import('./pages/sign-up-page/sign-up-page')))
const HomePage = React.lazy(() => (import('./pages/home-page/home-page')))
const MatchCourses = React.lazy(() => (import('./pages/match-page/match-courses')))

import './App.css'

const defaultUrl = 'https://nd2project.onrender.com/'

const App = () => {
  const [user, setUser] = React.useState({})
  React.useEffect(()=>{
    let token = localStorage.getItem("refresh_token")
    if (token && !localStorage.getItem('user')){
      axios.get(`${defaultUrl}ajax/v1.0/get-auth-data/`,
        {
          headers : {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(resp => resp.data)
      .then(data => {
        setUser(data)
        /* stores the user data */
        localStorage.setItem('user', JSON.stringify(data))
      }).catch(error => {
        console.log(error)
      })
    }else{
      setUser(JSON.parse(localStorage.getItem('user')))
    }
  }, [])
  React.useEffect(()=>{
    console.log(user)
  }, [user])
  const logOut = () => {
    axios.get(`${defaultUrl}log-out/?token=${localStorage.refresh_token}`, {
      headers: {
        Authorization: `Bearer ${localStorage.refresh_token}`
      }
    }).then(resp => resp.data)
    .then(data => {
      localStorage.clear()
      setUser({})
    })
  }
  return (
    <>
      <React.Suspense fallback={<PageSpinner/>}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route
            path='/sign-in/'
            element={
              user ?(
                <Redirect to='/match-course/'/>
              ):

                (
                  <>
                    <NavBar logOut={logOut} auth={ user ? true: false }/>
                    <LoginPage user={user} defaultUrl={defaultUrl}/>
                  </>
                )
            }
          />
          <Route
            path='/sign-up/'
            element={
              user ?(
                <Redirect to='/match-course/'/>
              ):
                (
                  <>
                    <NavBar logOut={logOut} auth={ user ? true: false }/>
                    <SignUpPage user={user} defaultUrl={defaultUrl}/>
                  </>
                )
            }
          />
          <Route
            path='/offered-courses/'
            element={
              <>
                <NavBar logOut={logOut} auth={ user ? true: false }/>
                <OfferedCoursesPage user={user} defaultUrl={defaultUrl}/>
              </>
            }
          />
          <Route
            path='/match-course/'
            element={
              <>
                <NavBar logOut={logOut} auth={ user ? true: false }/>
                <MatchCourses user={user} defaultUrl={defaultUrl}/>
              </>
            }
          />
          <Route
            path='*'
            element={
              <>
                <NavBar logOut={logOut} auth={ user ? true: false }/>
                <NotFoundPage/>
              </>
            }
          />
        </Routes>
      </React.Suspense>
    </>
  )
}

export default App
