import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssessmentIcon from '@mui/icons-material/Assessment';


const Menu = (
	{
		drawerOpen = true,
		setDrawerOpen,
		dispatch,
	}: {
		drawerOpen: boolean,
		setDrawerOpen: any
		dispatch: any,
	}
) => {

	return (
		<Drawer
			id={"menu"}
			variant={"permanent"}
			anchor="left"
			sx={{
				width: 240,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: 240,
					boxSizing: 'border-box',
				},
			}}
			open={drawerOpen}
			onClose={() => dispatch(setDrawerOpen())}
		>
			<div>
				<Typography variant="h6" id={"logo"}>
					Logo
				</Typography>
			</div>
			<List>
				<ListItem>
					<ListItemIcon><HomeIcon/></ListItemIcon>
					<ListItemText primary="Home"/>
				</ListItem>
				<ListItem>
					<ListItemIcon><CloudUploadIcon/></ListItemIcon>
					<ListItemText primary="Upload Invoice"/>
				</ListItem>
				<ListItem>
					<ListItemIcon><AssignmentIcon/></ListItemIcon>
					<ListItemText primary="Review Documents"/>
				</ListItem>
				<ListItem>
					<ListItemIcon><CheckCircleIcon/></ListItemIcon>
					<ListItemText primary="Validate Invoices"/>
				</ListItem>
				<ListItem>
					<ListItemIcon><PlaylistAddCheckIcon/></ListItemIcon>
					<ListItemText primary="Invoice Approvals"/>
				</ListItem>
				<ListItem>
					<ListItemIcon><MonetizationOnIcon/></ListItemIcon>
					<ListItemText primary="Payments"/>
				</ListItem>
				<ListItem>
					<ListItemIcon><AssessmentIcon/></ListItemIcon>
					<ListItemText primary="Reports"/>
				</ListItem>
			</List>
		</Drawer>
	);
};

export default Menu;
