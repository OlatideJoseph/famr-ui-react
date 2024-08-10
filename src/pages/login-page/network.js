import axios from 'axios'
import Cookies from 'js-cookie'
import {
	storeUser
} from '../../reducers/user-reducer'
import { defaultUrl, getUserFromAPI } from '../../network'


export const submitLoginForm = async (target) => {
	let resp = await axios.post(`${defaultUrl}login/`,
		target,
		{
		  headers:{
		    'Content-Type': 'application/json',
		    'X-Requested-With': 'XMLHttpRequest'
		}
    })
    return resp.data	
}

console.log(submitLoginForm)

export const handleSubmit = (dispatch, target) => {
	submitLoginForm(target)
	.then((data)=>{
      if (data.code === 200){
      	let token = data.refresh_token
      	if (token){
      		let user = getUserFromAPI(token)
      		user.then((data) => {
      			dispatch(storeUser(data))
	      		Cookies.set('refresh_token', token, { expires: 3 })
      		})
      	}
      }
    }).catch((error)=>{
      let { data } = error.response
    })
}