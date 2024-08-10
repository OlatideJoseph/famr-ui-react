import * as React from 'react'
import axios from 'axios'
import {
  Routes, Route, redirect, RouterProvider
} from 'react-router-dom'
import {
  useSelector, useDispatch
} from 'react-redux'
import {
  defaultUrl, getUserFromAPI, logOutUser
} from './network'
import {
  storeUser, authenticated, fetchGlobalUserData
} from './reducers/user-reducer'

import {
  AuthenticatedRoute
} from './components/routes/route'
import routes from './routers'

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


const App = () => {
  const [user, setUser] = React.useState({})
  const dispatch = useDispatch()

  React.useEffect(()=>{
    dispatch(fetchGlobalUserData())
  }, [])
  return (
    <>
      <React.Suspense fallback={<PageSpinner/>}>
        <RouterProvider router={routes}/>
      </React.Suspense>
    </>
  )
}

export default App
