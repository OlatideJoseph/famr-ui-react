import * as React from 'react'
import axios from 'axios'
import NavBar from '../../components/navbar/navbar'
import BootStrapButton from '../../components/buttons/bootstrap-button'

const LoginPage = ({ defaultUrl, ...others }) => {
  document.title = "Log In"
  const [username, setUsername] = React.useState('')
  const [password, dispatchPassword] = React.useReducer((state, action)=>{
    switch(action.type){
      case ('SET_PASSWORD'):
        return {
          ...state,
          value: event.target.value
        }
      default:
        throw new Error()
    }
  }, {value: '', message: '', stateClass: '' })
  /*handles username and it validation*/
  const handleUsername = (event) => {
    setUsername(event.target.value)
  }
  /*handles password and it validation*/
  const handlePassword = (event) => {
    /*stores the password*/
    let currentPassword = event.target.value
    dispatchPassword({
      type : 'SET_PASSWORD',
      payload : { value: currentPassword }
    })
    let reg = /([a-zA-Z0-9)(?!(*^$@#!))]){3, 8}/
    if (currentPassword && reg.test(currentPassword) && !event.target.classList.contains('is-valid')){
     event.target.classList.toggle('is-valid')
     console.log(event.target)
    }else if(event.target.classList.contains('is-valid')){
      event.target.classList.toggle('is-valid')
    }else{

    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${defaultUrl}login/`)
    .then((resp)=> resp.data)
    .then((data)=>{
      console.log(data)
    })
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
                <input className="form-control" onChange={handleUsername} id="username" name="username" required="" type="text"/>
              </div>            
              <div className="col">
                <label className="form-label" htmlFor="password">Password: </label>
                <input className={`form-control`} onChange={handlePassword} id="password" name="password" required="" type="password"/>
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