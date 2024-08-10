import * as React from 'react'

import {
  useNavigate
} from 'react-router-dom'

import {
  useDispatch, useSelector
} from 'react-redux'

import {
  handleSubmit
} from './network'

import axios from 'axios'
import NavBar from '../../components/navbar/navbar'
import ButtonSpinner from '../../components/spinners/button-spinner'
import Alert from '../../components/alert/alert'
import BootStrapButton from '../../components/buttons/bootstrap-button'

const LoginPage = ({...others }) => {
  document.title = "Log In"
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const alert = useSelector((state) => state.alert)
  
	return (
    <div
      className='login-page'
    >
      {/*<NavBar/>*/}
      <div className='container-fluid col-md-8'>
        {
          alert.showAlert ? (
            <Alert alertType={alert.alertType} handleClose={handleAlertClose}>
              {alert.message}
            </Alert>
          ): null
        }
        <fieldset className="form card mt-3 bg-secondary text-light">
          <legend className="card-header text-center">Login Form</legend>
          <form
            method="post"
            className="card-body"
            onSubmit={ (e) => {
             e.preventDefault()
             handleSubmit(dispatch, e.target) 
            }}>
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="username">Username: </label>
                <input
                  className="form-control"
                  id="username" 
                  name="username"
                  required=""
                  type="text"
                />
              </div>            
              <div className="col">
                <label className="form-label" htmlFor="password">Password: </label>
                <input
                  className={`form-control`}
                  id="password"
                  name="password"
                  required=""
                  type="password"
                  />
              </div>
            </div>
            <div className="row">
              <BootStrapButton
                className="btn-primary btn-sm mt-3"
                type="submit"
              >
                {
                  user.loading ? (<ButtonSpinner/>): ('Authenticate Data')
                }
              </BootStrapButton>
              <div className="card-footer text-center">
                Create an account ? <a href="/sign-up/" className="link text-light">Sign up!</a>
              </div>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
	)
}

export default LoginPage