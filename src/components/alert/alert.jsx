import * as React from 'react'
import './alert.css'

const Alert = ({ alertType='alert-primary', handleClose, children, ...others}) => {
	return (
    <div className={`alert ${alertType} mt-3`} role='alert'>
      {
        children
      }
      <button type="button" onClick={handleClose} className="btn-close" aria-label="Close"></button>
    </div>
	)
}

export default Alert