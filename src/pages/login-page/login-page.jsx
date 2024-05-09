import * as React from 'react'
import NavBar from '../../components/navbar/navbar'

const LoginPage = () => {
	return (
    <div
      className='login-page'
    >
      <NavBar/>
      <div className='container-fluid col-md-8'>
        <fieldset className="form card mt-3 bg-secondary text-light" style="max-width: 24rem;">
          <legend className="card-header text-center">Login Form</legend>
          <form method="post" action="javascript:void(0);" className="card-body">
              <input id="csrf_token" name="csrf_token" type="hidden" value="IjUyNjYxYmQ2MTc0OGRiNmI3NmVjNGZjMmFlMTAyNGFmMGMzNTFmODAi.ZjwnVQ.8JfzZ7eOX_sE43GWZUhthZwEUTw"/>
              <div className="row">
                  <div className="col">
                      <label className="form-label" for="username">Username: </label>
                      <input className="form-control" id="username" name="username" required="" type="text" value=""/>
                  </div>            
                  <div className="col">
                      <label className="form-label" for="password">Password: </label>
                      <input className="form-control" id="password" name="password" required="" type="password" value=""/>
                  </div>
              </div>
              <div className="row">
                <input className="login btn btn-primary btn-sm mt-3" id="login" name="login" type="submit" value="Login"/>
                <div className="card-footer">
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