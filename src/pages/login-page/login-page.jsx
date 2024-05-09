import * as React from 'react'
import NavBar from '../../components/navbar/navbar'
import BootStrapButton from '../../components/buttons/bootstrap-button'

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("submitted")
  }
	return (
    <div
      className='login-page'
    >
      <NavBar/>
      <div className='container-fluid col-md-8'>
        <fieldset className="form card mt-3 bg-secondary text-light">
          <legend className="card-header text-center">Login Form</legend>
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
                Authenticate Data
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