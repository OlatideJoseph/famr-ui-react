import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {
	createRoute, createProtectedRoute
} from './utils'


const LoginPage = React.lazy(() => (import('../pages/login-page/login-page')))
const SignUpPage = React.lazy(() => (import('../pages/sign-up-page/sign-up-page')))
const HomePage = React.lazy(() => (import('../pages/home-page/home-page')))
const MatchCourses = React.lazy(() => (import('../pages/match-page/match-courses')))
const NotFoundPage = React.lazy(() => (import('../pages/error-pages/notfound-page')))
const OfferedCoursesPage = React.lazy(() => (import('../pages/courses-page/offered-courses')))




export const routes = createBrowserRouter([
    createRoute('*', NotFoundPage),
    createRoute('/', HomePage, true, false),
    createRoute('/sign-in/', LoginPage, true),
    createRoute('/sign-up/', SignUpPage, true),
    createRoute('/offered-courses/', OfferedCoursesPage),
    createProtectedRoute('/match-course/', MatchCourses)
])