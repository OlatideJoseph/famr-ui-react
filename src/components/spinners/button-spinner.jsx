import * as React from 'react'
import './button-spinner.css'


const ButtonSpinner = () => {
	return(
		<div class="spinner-border spinner-border-sm text-light" role="status">
		  <span class="visually-hidden">Loading...</span>
		</div>
	)
}


export default ButtonSpinner