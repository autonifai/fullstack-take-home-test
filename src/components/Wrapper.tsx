import {Grid} from "@mui/material";
import Menu from "./Menu";
import TopBar from "./TopBar";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggle} from '../features/uiSlice';

function Wrapper(
	{
		children
	}: {
		children: React.ReactNode
	}
) {
	const drawerOpen = useSelector((state: any) => state.ui.drawerOpen);
	const dispatch = useDispatch();

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
							setDrawerOpen={toggle}
							dispatch={dispatch}
						/>
					)
				}
				<TopBar
					toggleDrawer={toggle}
					dispatch={dispatch}
				/>
			</Grid>
			{children}
		</Grid>
	);
}

export default Wrapper;