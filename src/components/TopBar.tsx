import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';


const TopBar = (
	{
		toggleDrawer,
		dispatch
	} : {
		toggleDrawer: any,
		dispatch: any,
	}
) => {
	return (
		<AppBar position="fixed" className={"toolbar"}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={() => dispatch(toggleDrawer())}
					edge="start"
				>
					<MenuIcon />
				</IconButton>
				<IconButton color="inherit">
					<SettingsIcon/>
				</IconButton>
				<Avatar alt="User Avatar" src=""/>
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;
