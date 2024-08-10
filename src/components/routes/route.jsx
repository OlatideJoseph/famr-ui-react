import * as React from 'react'
import { useSelector } from 'react-redux'
import Redirect from '../../pages-component/inheritted/redirect-component'


export const AuthenticatedRoute = ({
	path, element, errorElement
}) => {
	const user = useSelector((state) => state.user)
	if (user.email){
		return (
			<Redirect to='/login/'/>
		)
	}else{
		return (
			element
		)
	}

}