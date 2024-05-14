import * as React from 'react'
import './page-spinner.css'

const PageSpinner = ({ color='text-info' }) => {
	return (
		<div className='page-spinner'>
	    <div className={`spinner-grow ${color}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p>...Loading</p>
		</div>
	)
}

export default PageSpinner