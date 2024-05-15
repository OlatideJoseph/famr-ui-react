import * as React from 'react'
import './in-page-spinner.css'

const InPageSpinner = (props) => {
	return (
		<div className='in-page-spinner'>
			<div class="spinner-border text-dark" role="status">
			  <span class="visually-hidden">Loading...</span>
			</div>
		</div>
	)
}

export default InPageSpinner