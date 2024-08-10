import Cookies from 'js-cookie'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getUserFromAPI as fetchUser } from '../network'


const initialState = {
	data: {

	},
	authenticated: false,
	loading: false,
	error: null
}

export const fetchGlobalUserData = createAsyncThunk(
	'globalUserData/fetchGlobalUserData',
	async ()=>{
		let token = Cookies.get('refresh_token')
		if (token){
			let data = await fetchUser(token)
			return data
		}
		return initialState.data
	}
) 

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		storeUser: (state, action) => {
			state.data = action.payload
		},
		authenticated: (state, action) => {
			state.authenticated = true
		},
		loading: (state, action) => {
			state.loading = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
		.addCase(fetchGlobalUserData.pending, (state, action) => {
			state.loading = true;
			state.authenticated = false
		})
		.addCase(fetchGlobalUserData.fulfilled, (state, action) => {
			state.loading = false
			state.authenticated = false
			if (action.payload?.email){
				state.data = action.payload
				state.authenticated = true
			}
		})
		.addCase(fetchGlobalUserData.rejected, (state, action) => {
			state.authenticated = false
			state.error = action?.error?.message
			state.loading = false
		})
	}
})

export const { storeUser, authenticated } = userSlice.actions

export default userSlice.reducer