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
		drawerOpen = false,
	} : {
		toggleDrawer: any,
		drawerOpen: boolean,
	}
) => {
	return (
		<AppBar position="fixed" className={"toolbar"}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={() => toggleDrawer(!drawerOpen)}
					edge="start"
					sx={{ mr: 2, display: { md: 'none' } }}
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
