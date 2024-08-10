import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NavBar from '../../components/navbar/navbar'
import ServerError from './server-error.svg?react'
import './error-element.css'

const ErrorComponent = ({ error }) => {
	const user = useSelector((state) => state.user)
	return (
		<>
			<NavBar logOut={()=>{}} auth={user.authenticated}/>
			<div className="error-container">
				<h2>Oops, An error occurred !</h2>
				<p className="text-danger">{error?.message || 'Something went wrong.'}</p>
				<ServerError/>
				{/* Add more details or actions as needed */}
			</div>
		</>
	);
};

export default ErrorComponent;
