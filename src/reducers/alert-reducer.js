import { createSlice } from '@reduxjs/toolkit'


const initialState = {
	alertType: 'primary',
	message: '',
	showAlert: false,
}

const alertSlice = createSlice({
	name: 'alert',
	initialState,
	reducers: {
		changeAlertType: (state, action) => {
			state.alertType = action.payload
		},
		setAlertMessage: (state, action) => {
			state.message = action.payload
		},
		setAlertShow: (state, action) =>{
			state.showAlert = action.payload
		},
		updateState: (state, action) => {
			state = action.payload
		}
	}
})

export const { changeAlertType, setAlertMessage, setAlertShow, upAlertState } = alertSlice.actions
export default alertSlice.reducer