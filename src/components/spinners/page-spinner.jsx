import * as React from 'react'
import './page-spinner.css'

const PageSpinner = () => {
	return (
		<div className='page-spinner'>
      <div className="spinner-grow text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p>...Loading</p>
		</div>
	)
}

export default PageSpinner