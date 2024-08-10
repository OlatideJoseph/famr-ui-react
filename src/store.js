import { configureStore } from '@reduxjs/toolkit'
import { userReducer, alertReducer, coursesReducer } from './reducers'


const store = configureStore({
	reducer: {
		user: userReducer,
		alert: alertReducer,
		courses: coursesReducer
	}
})

export default store