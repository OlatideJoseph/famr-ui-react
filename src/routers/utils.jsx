import * as React from 'react'
import Cookies from 'js-cookie'
import { useSelector, useDispatch } from 'react-redux'
import { logOutUser } from '../network'

import Redirect from '../pages-component/inheritted/redirect-component'
import NavBar from '../components/navbar/navbar'
import ErrorComponent from '../pages/error-pages/error-element'

const Element = ({
	showNav=true,
	children,
	redirectWhenAuth=false
}) => {
	const user = useSelector((state) => state.user)
	const courses = useSelector((state) => state.courses)
	const dispatch = useDispatch()
	React.useEffect(() => {
		if (courses.error){
			alert('Course Error')
		}
		if (user.error){
			alert('User Error')
		}
	}, [user.error, courses.error])

	if (redirectWhenAuth && user.authenticated){
		return (
			<Redirect to='/match-course/'/>
		)
	}else{
		return (
			<React.Fragment>
				{
					showNav ? (
						<NavBar logOut={
							() => {
								let token = Cookies.get('refresh_token')
								logOutUser(token, dispatch)
							}
						} auth={ user.authenticated }/>
					): null
				}
				{
					children
				}
			</React.Fragment>
		)
	}
}

const ProtectedElement = (
{
	showNav=true, children
}) => {
	const user = useSelector((state) => state.user)
	const dispatch = useDispatch()
	if (!user.authenticated){
		return (<Redirect to='/sign-in/'/>)
	}else{
		return (
			<React.Fragment>
				{
					showNav ? (
						<NavBar
							logOut={() => {
								let token = Cookies.get('refresh_token')
								logOutUser(token, dispatch)
							}}
							auth={ user.authenticated }
						/>
					): null
				}
				{
					children
				}
			</React.Fragment>
		)
	}

}

export const createRoute = (
	path, Component, redirectWhenAuth=false, showNav=true, others={}
) => {
	return {
		path: path,
		element: (
			<Element
				showNav={showNav}
				redirectWhenAuth={redirectWhenAuth}
			>
				<Component/>
			</Element>
		),
		ErrorBoundary: ErrorComponent
		,
		...others
	}
}
/*
 *
 *Protected Routes
 */
export const createProtectedRoute = (
	path, Component, showNav=true, others={}
) => {
	return {
		path: path,
		element: (
			<ProtectedElement
				showNav={showNav}
			>
				<Component/>
			</ProtectedElement>
		),
		ErrorBoundary: ErrorComponent
		,
		...others
	}
}