import React from 'react';
import InvoicesTable from "./components/InvoicesTable";
import {Grid} from "@mui/material";
import Wrapper from "./components/Wrapper";

function App() {

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

export default App;
