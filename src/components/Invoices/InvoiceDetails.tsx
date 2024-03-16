import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";


function InvoiceDetails(
	{
		currentInvoice
	}: {
		currentInvoice: any
	}
) {
	return (
		<Grid
			padding={2}
			xs={12}
			sm={12}
			md={12}
			lg={12}
			xl={12}
			item
			container
		>
			<Grid
				xs={12}
				sm={12}
				md={6}
				lg={6}
				xl={6}
				item
			>
				<Grid
					className={"info-holder"}
					margin={1}
				>
					<Typography className={"info-title"}>
						Invoice number
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.number}
					</Typography>
				</Grid>
			</Grid>
			<Grid
				xs={12}
				sm={12}
				md={6}
				lg={6}
				xl={6}
				item
			>
				<Grid
					className={"info-holder"}
					margin={1}
				>
					<Typography className={"info-title"}>
						PO Number
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.po_number}
					</Typography>
				</Grid>
			</Grid>
			<Grid
				xs={12}
				sm={12}
				md={4}
				lg={4}
				xl={4}
				item
			>
				<Grid
					className={"info-holder"}
					margin={1}
				>
					<Typography className={"info-title"}>
						Date of Issue
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.date_of_issue}
					</Typography>
				</Grid>
			</Grid>
			<Grid
				xs={12}
				sm={12}
				md={4}
				lg={4}
				xl={4}
				item
			>
				<Grid
					className={"info-holder"}
					margin={1}
				>
					<Typography className={"info-title"}>
						Payment Terms
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.payment_terms}
					</Typography>
				</Grid>
			</Grid>
			<Grid
				xs={12}
				sm={12}
				md={4}
				lg={4}
				xl={4}
				item
			>
				<Grid
					className={"info-holder"}
					margin={1}
				>
					<Typography className={"info-title"}>
						Due Date
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.due_date}
					</Typography>
				</Grid>
			</Grid>
			<Grid
				xs={12}
				sm={12}
				md={6}
				lg={6}
				xl={6}
				item
			>
				<Grid
					className={"info-holder"}
					margin={1}
				>
					<Typography className={"info-title"}>
						Invoice Description
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.description}
					</Typography>
				</Grid>
			</Grid>
			<Grid
				xs={12}
				sm={12}
				md={6}
				lg={6}
				xl={6}
				item
			>
				<Grid
					className={"info-holder"}
					margin={1}
				>
					<Typography className={"info-title"}>
						Line Item Details
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.line_item_details}
					</Typography>
				</Grid>
			</Grid>
			<Grid
				xs={12}
				sm={12}
				md={4}
				lg={4}
				xl={4}
				item
			>
				<Grid
					className={"info-holder"}
					margin={1}
				>
					<Typography className={"info-title"}>
						Pre-Tax Amount
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.pre_tax_amount.toLocaleString("en-GB", {
							style: 'currency',
							currency: currentInvoice.currency
						})}
					</Typography>
				</Grid>
			</Grid>
			<Grid
				xs={12}
				sm={12}
				md={4}
				lg={4}
				xl={4}
				item
			>
				<Grid
					className={"info-holder"}
					margin={1}
				>
					<Typography className={"info-title"}>
						Discount
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.discount.toLocaleString("en-GB", {
							style: 'currency',
							currency: currentInvoice.currency
						})}
					</Typography>
				</Grid>
			</Grid>
			<Grid
				xs={12}
				sm={12}
				md={4}
				lg={4}
				xl={4}
				item
			>
				<Grid
					className={"info-holder"}
					margin={1}
				>
					<Typography className={"info-title"}>
						Discount
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.tax_amount.toLocaleString("en-GB", {
							style: 'currency',
							currency: currentInvoice.currency
						})}
					</Typography>
				</Grid>
			</Grid>
			<Grid
				xs={12}
				sm={12}
				md={6}
				lg={6}
				xl={6}
				item
			>
				<Grid
					className={"info-holder"}
					margin={1}
				>
					<Typography className={"info-title"}>
						Total Amount
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.total_amount.toLocaleString("en-GB", {
							style: 'currency',
							currency: currentInvoice.currency
						})}
					</Typography>
				</Grid>
			</Grid>
			<Grid
				xs={12}
				sm={12}
				md={6}
				lg={6}
				xl={6}
				item
			>
				<Grid
					className={"info-holder"}
					margin={1}
				>
					<Typography className={"info-title"}>
						Currency
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.currency}
					</Typography>
				</Grid>
			</Grid>
			<Grid
				xs={12}
				sm={12}
				md={6}
				lg={6}
				xl={6}
				item
			>
				<Grid
					className={"info-holder"}
					margin={1}
				>
					<Typography className={"info-title"}>
						GL Code
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.gl_code}
					</Typography>
				</Grid>
			</Grid>
			<Grid
				xs={12}
				sm={12}
				md={6}
				lg={6}
				xl={6}
				item
			>
				<Grid
					className={"info-holder"}
					margin={1}
				>
					<Typography className={"info-title"}>
						Cost Centre
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.cost_centre}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default InvoiceDetails;