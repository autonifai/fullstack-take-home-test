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

const InvoicesTable = () => {
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
						<TableCell><SquareIcon /></TableCell>
						<TableCell>Invoice Number</TableCell>
						<TableCell>Vendor Name</TableCell>
						<TableCell>Invoice Description</TableCell>
						<TableCell>Due Date</TableCell>
						<TableCell>Amount</TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{/* Aqui você colocaria os dados das linhas, caso houvesse */}
					<TableRow>
						<TableCell><SquareIcon /></TableCell>
						<TableCell>123456</TableCell>
						<TableCell>Vendor A</TableCell>
						<TableCell>Description A</TableCell>
						<TableCell>2024-03-30</TableCell>
						<TableCell>$100.00</TableCell>
						<TableCell className={"invoice-button-container"}>
							<Button>
								Review
							</Button>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell><SquareIcon /></TableCell>
						<TableCell>789012</TableCell>
						<TableCell>Vendor B</TableCell>
						<TableCell>Description B</TableCell>
						<TableCell>2024-04-15</TableCell>
						<TableCell>$200.00</TableCell>
						<TableCell className={"invoice-button-container"}>
							<Button>
								Review
							</Button>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default InvoicesTable;
