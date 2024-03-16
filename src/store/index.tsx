import { configureStore } from '@reduxjs/toolkit';
import uiSlice from "../features/uiSlice";
import invoicesSlice from "../features/invoicesSlice";



const store = configureStore({
	reducer: {
		ui: uiSlice,
		invoices: invoicesSlice
	},
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store