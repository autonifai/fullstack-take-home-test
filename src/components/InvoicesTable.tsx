import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SquareIcon from '@mui/icons-material/Square';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const InvoicesTable = (
	{
		invoices = []
	} : {
		invoices: any[]
	}
) => {
	const navigate = useNavigate()
	return (
		<TableContainer
			component={Paper}
			style={{ maxWidth: '100%' }}
			sx={{ overflowX: 'auto' }}
			id={"invoices-table"}
		>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell className={"pink-square-holder"}>
							<SquareIcon />
						</TableCell>
						<TableCell>Invoice Number</TableCell>
						<TableCell>Vendor Name</TableCell>
						<TableCell>Invoice Description</TableCell>
						<TableCell>Due Date</TableCell>
						<TableCell>Amount</TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						invoices.map(i => (
							<TableRow
								key={i.id}
							>
								<TableCell className={"pink-square-holder"}>
									<SquareIcon />
								</TableCell>
								<TableCell>{i.number}</TableCell>
								<TableCell>{i.vendor}</TableCell>
								<TableCell>{i.description}</TableCell>
								<TableCell>{i.due_date}</TableCell>
								<TableCell>{i.total_amount.toLocaleString("en-GB",{
									style: 'currency',
									currency: i.currency
								})}</TableCell>
								<TableCell className={"invoice-button-container"}>
									<Button onClick={() => navigate(`/invoice/details/${i.id}`)}>
										Review
									</Button>
								</TableCell>
							</TableRow>
						))
					}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default InvoicesTable;
