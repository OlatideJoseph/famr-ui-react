import * as React from 'react'
import axios from 'axios'
import NavBar from '../../components/navbar/navbar'
import BootStrapButton from '../../components/buttons/bootstrap-button'
import './sign-up.css'

const SignUpPage = ({ user, defaultUrl, ...props}) => {
  document.title = "Sign Up"
  const [signUp, signUpDispatcher] = React.useReducer((state, action) => {
    switch (action.type){
      case 'SET_EMAIL':
        return { ...state, email: action.payload.email }
      case 'SET_USERNAME':
        return { ...state, username: action.payload.username }
      case 'SET_FIRSTNAME':
        return { ...state, firstname: action.payload.firstname }
      case 'SET_MIDDLENAME':
        return { ...state, middlename: action.payload.middlename }
      case 'SET_LASTNAME':
        return { ...state, lastname: action.payload.lastname }
      case 'SET_PASSWORD':
        return { ...state, password: action.payload.password }
      case 'DOB':
        return { ...state, dob: action.payload.dob }
      default :
        throw new Error()
    }
  }, { email: '', username: '', firstname: '', middlename: '', lastname: '', password: '', dob: ''})
  const handleSubmit = (event) => {
    axios.post(
    `${defaultUrl}sign-up/`,
    event.target,
    {
      headers:{
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  }
	return (
    <div className='sign-up-page'>
      {/*<NavBar/>*/}
      <div className='container-fluid col-md-8'>
        <fieldset className="form card mt-3 bg-secondary text-light">
          <legend className="card-header text-center">Sign Up Form</legend>
          <form method="post" className="card-body" onSubmit={ handleSubmit }>
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="email">Email: </label>
                <input className="form-control" id="email" name="email" type="text" defaultValue=""/>
              </div>
              <div className="col">
                <label className="form-label" htmlFor="username">Username: </label>
                <input className="form-control" id="username" name="username" type="text" defaultValue=""/>
              </div>            
            </div>
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="firstname">*FirstName*: </label>
                <input className="form-control" name="firstname" type="text" defaultValue=""/>
              </div>            
              <div className="col">
                <label className="form-label" htmlFor="middlename">*Middle Name*: </label>
                <input className="form-control" id="middlename" name="middlename" type="text" defaultValue=""/>
              </div>
              <div className="col">
                <label className="form-label" htmlFor="lastname">*Last Name*: </label>
                <input className="form-control" id="lastname" name="lastname" type="text" defaultValue=""/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="password">*Password*: </label>
                <input className="form-control" id="password" name="password" type="password" defaultValue=""/>
              </div>            
              <div className="col">
                <label className="form-label" htmlFor="dateofbirth">*Date-Of-Birth*: </label>
                <input className="form-control" id="dateofbirth" name="dateofbirth" type="date" defaultValue=""/>
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