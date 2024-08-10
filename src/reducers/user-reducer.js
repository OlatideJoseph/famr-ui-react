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
			if (action.payload?.email){
				state.authenticated = true
				state.loading = false
			}
		},
		authenticated: (state, action) => {
			state.authenticated = true
		},
		setLoading: (state, action) => {
			state.loading = action.payload
		},
		logOut: (state, action) =>{
			state.authenticated = false
			state.data = {

			}
		}
	},
	extraReducers: (builder) => {
		builder
		.addCase(fetchGlobalUserData.pending, (state, action) => {
			state.loading = true;
			state.authenticated = false
			state.error = null
		})
		.addCase(fetchGlobalUserData.fulfilled, (state, action) => {
			state.loading = false
			if (action.payload?.email){
				state.data = action.payload
				state.authenticated = true
				state.error = null
			}
		})
		.addCase(fetchGlobalUserData.rejected, (state, action) => {
			state.authenticated = false
			state.error = action?.error
			state.loading = false
		})
	}
})

export const { storeUser, authenticated, setLoading, logOut } = userSlice.actions

export default userSlice.reducer