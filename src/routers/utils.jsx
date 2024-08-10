import * as React from 'react'
import { useSelector } from 'react-redux'
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
	if (redirectWhenAuth && user.authenticated){
		return (
			<Redirect to='/match-course/'/>
		)
	}
	return (
		<React.Fragment>
			{
				showNav ? (
					<NavBar logOut={() => logOutUser()} auth={ user.authenticated }/>
				): null
			}
			{
				children
			}
		</React.Fragment>
	)
}

const ProtectedElement = (
{
	showNav=true, children
}) => {
	const user = useSelector((state) => state.user)
	if (!user.authenticated){
		return (<Redirect to='/sign-in/'/>)
	}else{
		return (
			<React.Fragment>
				{
					showNav ? (
						<NavBar logOut={() => logOutUser()} auth={ user.authenticated }/>
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
				redirectWhenAuth={false}
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