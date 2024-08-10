import Cookies from 'js-cookie'
import axios from 'axios'
import { logOut as logOutAction } from './reducers/user-reducer'

export const defaultUrl = "https://nd2project.onrender.com/"

export const getUserFromAPI = async (token) => {
	let userResp = await axios.get(
  	`${defaultUrl}ajax/v1.0/get-auth-data/`,
    {
      headers : {
        Authorization: `Bearer ${token}`
      }
    }
  )
  return userResp.data
}

export const logOutUser = async (token, dispatch) => {
	let logOutResp = await axios.get(`${defaultUrl}log-out/?token=${token}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (dispatch){
    dispatch(logOutAction())
  }
  Cookies.remove('refresh_token')
}