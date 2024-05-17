import * as React from 'react'
import './button-spinner.css'


const ButtonSpinner = () => {
	return(
		<div className="spinner-border spinner-border-sm text-light" role="status">
		  <span className="visually-hidden">Loading...</span>
		</div>
	)
}


export default ButtonSpinner