import {createSlice} from '@reduxjs/toolkit';

interface state {
	drawerOpen: boolean
}

export const uiSlice = createSlice({
	name: 'drawer',
	initialState: {
		drawerOpen: true,
	},
	reducers: {
		open: (state: state) => {
			state.drawerOpen = true;
		},
		close: (state: state) => {
			state.drawerOpen = false;
		},
		toggle: (state: state) => {
			state.drawerOpen = !state.drawerOpen;
		},
	},
})

// Action creators are generated for each case reducer function
export const {open, close, toggle} = uiSlice.actions

export default uiSlice.reducer;