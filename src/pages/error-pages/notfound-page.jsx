import * as React from 'react'
import NavBar from '../../components/navbar/navbar'
import './notfound.css'

const NotFoundPage = () => {
  return (
    <div className='error-page'>
      {/*<NavBar/>*/}
      <div className='container-fluid col-md-8'>
        <h1>Page Not Found !</h1>
      </div>
    </div>
  )
}

export default NotFoundPage