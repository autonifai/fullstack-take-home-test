import React, { useEffect } from 'react';
import InvoicesTable from "./components/InvoicesTable";
import { Grid } from "@mui/material";
import Wrapper from "./components/Wrapper";

const App: React.FC = () => {

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
