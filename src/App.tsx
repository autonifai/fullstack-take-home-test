import React, {useState} from 'react';
import './styles/main.scss';
import Menu from "./components/Menu";
import InvoicesTable from "./components/InvoicesTable";
import TopBar from "./components/TopBar";
import {Grid} from "@mui/material";

function App() {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};
	return (
		<Grid container>
			<Grid
				xs={2}
				md={2}
				lg={2}
				xl={2}
				item
			>
				{
					drawerOpen && (
						<Menu
							drawerOpen={drawerOpen}
							setDrawerOpen={toggleDrawer}
						/>
					)
				}
			</Grid>
			<TopBar
				toggleDrawer={toggleDrawer}
				drawerOpen={drawerOpen}
			/>

			<Grid
				marginTop={10}
				xs
				item
			>
				<InvoicesTable/>
			</Grid>
		</Grid>
	);
}

export default App;
