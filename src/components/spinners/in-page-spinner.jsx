import * as React from 'react'
import './in-page-spinner.css'

const InPageSpinner = (props) => {
	return (
		<div className='in-page-spinner'>
			<div className="spinner-border text-dark" role="status">
			  <span className="visually-hidden">Loading...</span>
			</div>
		</div>
	)
}

export default InPageSpinner