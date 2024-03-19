import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

function VendorDetails (
	{
		currentInvoice
	} : {
		currentInvoice: any,
	}
) {
	return (
		<Grid
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
						Vendor
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.vendor}
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
						Vendor tax registration number
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.vendor_tax_registration_number}
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
						Vendor Bank Details
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.vendor_bank_details}
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
						Vendor address
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.vendor_address}
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
						Billing address
					</Typography>
					<Typography className={'info-description'}>
						{currentInvoice.billing_address}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default VendorDetails;