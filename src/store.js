import { configureStore } from '@reduxjs/toolkit'
import { userReducer, alertReducer, coursesReducer, matchReducer } from './reducers'


const store = configureStore({
	reducer: {
		user: userReducer,
		alert: alertReducer,
		courses: coursesReducer,
		match: matchReducer
	}
})

export default store