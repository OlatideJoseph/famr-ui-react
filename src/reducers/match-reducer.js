import Cookies from 'js-cookie'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
	getCourseDataFromAPI,
	getSubjectDataFromAPI,
	getGradeAndPointFromAPI
} from '../pages/match-page/network'

const initialState = {
	courses: [],
	subjects: [],
	gradePoint: [],
	loading: true,
	error: null
}

export const fetchGlobalMatchData = createAsyncThunk("globalMatchData", async ()=>{
	let token = Cookies.get('refresh_token')
	console.log(token)
	let courseData = await getCourseDataFromAPI(token)
	let subjectData = await getSubjectDataFromAPI(token)
	let gradePoint = await getGradeAndPointFromAPI(token)
	return { courseData, subjectData, gradePoint }
})

const matchSlice = createSlice({
	name: 'match',
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder
		.addCase(fetchGlobalMatchData.pending, (state, action) => {
			console.log('pending')
		})
		builder.addCase(fetchGlobalMatchData.fulfilled, (state, action) => {
			state.loading = false
			state.courses = action?.payload?.courseData || []
			state.subjects = action?.payload?.subjectData || []
			state.gradePoint = action?.payload?.gradePoint || []
			console.log(action.payload)
		})
		builder.addCase(fetchGlobalMatchData.rejected, (state, action) => {
			state.error = action.error
		})
	}
})

export default matchSlice.reducer