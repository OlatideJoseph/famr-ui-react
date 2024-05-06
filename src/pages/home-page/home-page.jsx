import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import './home-page.css'

const HomePage = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/sign-in/')
    console.log('click')
  }
  return (
    <div
      className='home-section'
    >
      <div className='container'>
        <div className='section1'>
          <h2>
            Welcome To Your Path Of Excellence !
          </h2>
          <p>
            Your Pursuit Of Knowledge, Your Dream Career, And Your Aspirations - It All
            Begins Here, We're Not Just App; We're Your Trusted Companion On This Exciting Journery
            On University Admission.
          </p>
        </div>
        <div className='section2'>
          <img
            src='./logo.jpeg'
            alt='Lasustech Logo'
            className='logo-home'
          />
          <h1>Welcome To Lasustech Admission<br/>Companion</h1>
          <button
            type='button'
            onClick={ handleClick }
            className='home-btn'
          >
            Click here for more information
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage