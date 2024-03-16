import React, { useEffect } from 'react';
import { Grid } from "@mui/material";
import InvoicesTable from "../components/InvoicesTable";
import Wrapper from "../components/Wrapper";

const Invoices: React.FC = () => {

	return (
		<Wrapper>
			<Grid
				marginTop={10}
				xs
				item
			>
				<InvoicesTable/>
			</Grid>
		</Wrapper>
	);
}

export default Invoices;
