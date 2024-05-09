import * as React from 'react'

const BootStrapButton = ({ className, children, ...others }) => {
	return (
    <button
      className={`btn ${className}`}
      {...others}
    >
      {
        children
      }
    </button>
  )
}

export default BootStrapButton
