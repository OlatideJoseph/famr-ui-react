import * as React from 'react'
import axios from 'axios'
import NavBar from '../../components/navbar/navbar'
import ButtonSpinner from '../../components/spinners/button-spinner'
import Alert from '../../components/alert/alert'
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
  const [isLoading, setIsLoading] = React.useState(false)
  /*The alert reducer*/
  const [alert, alertDispatch] = React.useReducer((state, action) => {
    switch (action.type){
      case 'SHOW_ALERT':
        return{
          ...state,
          ...action.payload
        }
      case 'CHANGE_ALERT_TYPE':
        return {
          ...state,
          alertType: action.payload.alertType
        }
      default :
        throw new Error()
    }
  }, {alertType: '', showAlert: false, message: 'message'})
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
    /*set is loading to true*/
    setIsLoading(true)
    axios.post(`${defaultUrl}login/`,
    event.target,
    {
      headers:{
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then((resp)=> resp.data)
    .then((data)=>{
      if (data.code === 200){
        localStorage.setItem('refresh_token', data.refresh_token)
        alertDispatch({
          type: 'SHOW_ALERT',
          payload: {
            alertType: `alert-${data.msg[1]}`,
            message: data.msg[1],
            showAlert: true
          }
        })
      }
      setIsLoading(false)
    }).catch((error)=>{
      let {data} = error.response
      alertDispatch({
        type: 'SHOW_ALERT',
        payload: {
          alertType: `alert-${data.msg[1]}`,
          message: data.msg[0],
          showAlert: true
        }
      })
      setIsLoading(false)
    })
  }
  const handleAlertClose = () => {
    alertDispatch({
      type: 'SHOW_ALERT',
      payload: {
        showAlert: false
      }
    })
  }
	return (
    <div
      className='login-page'
    >
      <NavBar/>
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
                {
                  isLoading ? (<ButtonSpinner/>): ('Authenticate Data')
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