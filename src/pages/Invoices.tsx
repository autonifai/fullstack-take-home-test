import React, { useEffect } from 'react';
import { Grid } from "@mui/material";
import InvoicesTable from "../components/InvoicesTable";
import Wrapper from "../components/Wrapper";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store";
import {fetchAllInvoices} from "../features/invoicesSlice";

const Invoices: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const invoices = useSelector((state: any) => state.invoices.invoices);
	const loading = useSelector((state: any) => state.invoices.loading);

	useEffect(() => {
		dispatch(fetchAllInvoices());
	}, [
		dispatch,
	]);

	if (loading) {
		return (
			<div>
				loading...
			</div>
		)
	}

	return (
		<Wrapper>
			<Grid
				marginTop={10}
				xs
				item
			>
				<InvoicesTable
					invoices={invoices}
				/>
			</Grid>
		</Wrapper>
	);
}

export default Invoices;
