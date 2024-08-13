import Cookies from 'js-cookie'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getCoursesFromAPI from '../pages/courses-page/network'


const initialState = {
	data: [
	],
	loading: true,
	error: null
}

export const fetchGlobalCoursesData = createAsyncThunk(
	'globalCoursesData/fetchGlobalCoursesData',
	async () => {
		let token = Cookies.get('refresh_token')
		let courses = await getCoursesFromAPI(token)
		return courses.courses
	}
)

const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		updateCourses: (state, action) => {
			state.data = action.payload
		}
	},
	extraReducers: (builder) =>{
		builder
		.addCase(fetchGlobalCoursesData.pending, (state, action) => {
			state.loading = true
		})
		.addCase(fetchGlobalCoursesData.fulfilled, (state, action) =>{
			state.loading = false
			state.data = action.payload
		})
		.addCase(fetchGlobalCoursesData.rejected, (state, action) => {
			state.loading = false
			state.error = action.error
		})
	}
})

export const { updateCourses } = coursesSlice.actions

export default coursesSlice.reducer