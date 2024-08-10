import Cookies from 'js-cookie'
import axios from 'axios'

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

export const logOutUser = async (token) => {
	let logOutResp = await axios.get(`${defaultUrl}log-out/?token=${token}`, {
    headers: {
      Authorization: `Bearer ${localStorage.refresh_token}`
    }
  })
  Cookies.remove('refresh_token')
}