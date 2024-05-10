import * as React from 'react'
import NavBar from '../../components/navbar/navbar'
import BootStrapButton from '../../components/buttons/bootstrap-button'
import './sign-up.css'

const SignUpPage = (props) => {
  document.title = "Sign Up"
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Submitted")
  }
	return (
    <div className='sign-up-page'>
      <NavBar/>
      <div className='container-fluid col-md-8'>
        <fieldset className="form card mt-3 bg-secondary text-light">
          <legend className="card-header text-center">Sign Up Form</legend>
          <form method="post" className="card-body" onSubmit={ handleSubmit }>
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="username">Username: </label>
                <input className="form-control" id="username" name="username" required="" type="text" defaultValue=""/>
              </div>            
              <div className="col">
                <label className="form-label" htmlFor="password">Password: </label>
                <input className="form-control" id="password" name="password" required="" type="password" defaultValue=""/>
              </div>
            </div>
            <div className="row">
              <BootStrapButton
                className="btn-primary btn-sm mt-3"
                type="submit"
              >
                Submit Data
              </BootStrapButton>
              <div className="card-footer text-center">
                Already have an account? <a href="/sign-in/" className="link text-light">Log In!</a>
              </div>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  )
}

export default SignUpPage