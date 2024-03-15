import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';

const TopBar = () => {
	return (
		<AppBar position="fixed" className={"toolbar"}>
			<Toolbar>
				<IconButton color="inherit">
					<SettingsIcon/>
				</IconButton>
				<Avatar alt="User Avatar" src=""/>
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;
