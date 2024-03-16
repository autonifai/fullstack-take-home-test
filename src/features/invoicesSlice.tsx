import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Request from "../utils/Request";

export interface InvoicesState {
	invoices: any[];
	currentInvoice: { },
	loading: boolean;
	error: string | null;
}


const initialState: InvoicesState = {
	invoices: [],
	loading: false,
	error: null,
	currentInvoice: {},
};

export const fetchAllInvoices = createAsyncThunk(
	'invoices/fetchAll',
	async () => {
		try {
			const response = await Request.get('invoices');
			return response.data;
		} catch (error) {
			throw new Error('Failed to fetch invoices');
		}
	}
);

export const retrieveInvoice = createAsyncThunk(
	'invoices/retrieveInvoice',
	async (id: number | undefined = 0) => {
		try {
			const response = await Request.get(`invoices?invoice_id=${id}`);
			return response.data;
		} catch (error) {
			throw new Error('Failed to fetch invoices');
		}
	}
);

export const invoicesSlice = createSlice({
	name: 'invoices',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllInvoices.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchAllInvoices.fulfilled, (state, action) => {
				state.loading = false;
				state.invoices = action.payload;
				state.error = null;
			})
			.addCase(fetchAllInvoices.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch invoices';
			})
			.addCase(retrieveInvoice.pending, (state) => {
				state.loading = true;
			})
			.addCase(retrieveInvoice.fulfilled, (state, action) => {
				state.loading = false;
				state.currentInvoice = action.payload;
				state.error = null;
			})
			.addCase(retrieveInvoice.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch invoices';
			})
	},
});

export default invoicesSlice.reducer;
