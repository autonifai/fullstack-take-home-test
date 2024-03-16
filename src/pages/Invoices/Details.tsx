import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store";
import {useEffect} from "react";
import {fetchAllInvoices, retrieveInvoice} from "../../features/invoicesSlice";
import {Grid} from "@mui/material";
import InvoicesTable from "../../components/InvoicesTable";
import Wrapper from "../../components/Wrapper";
import {useParams} from "react-router-dom";
import Typography from "@mui/material/Typography";
import VendorDetails from "../../components/Invoices/Details/VendorDetails";
import InvoiceDetails from "../../components/Invoices/InvoiceDetails";


function Details() {
	const dispatch = useDispatch<AppDispatch>();
	const invoices = useSelector((state: any) => state.invoices.invoices);
	const currentInvoice = useSelector((state: any) => state.invoices.currentInvoice);
	const loading = useSelector((state: any) => state.invoices.loading);
	const invoiceId = parseInt(useParams().id as string);


	useEffect(() => {
		// if user forces the storage erase we load again the invoices table.
		if (invoices.length == 0) {
			dispatch(fetchAllInvoices());
		}
	}, [
		dispatch,
		invoices,
	]);

	useEffect(() => {
			dispatch(retrieveInvoice(invoiceId));
	}, [
		invoiceId,
		dispatch,
		// currentInvoice
	]);

	if (loading) {
		return (
			<div>
				loading...
			</div>
		);
	}

	if (currentInvoice.number === undefined) {
		return (
			<Wrapper>
				<Grid
					id={"invoice-details"}
					marginTop={10}
					xs
					item
					container
				>
					<Grid
						item
						xs={12}
						sm={12}
						md={12}
						lg={12}
						xl={12}
					>
						<InvoicesTable invoices={invoices}/>
					</Grid>
				</Grid>
			</Wrapper>
		)
	}

	return (
		<Wrapper>
			<Grid
				id={"invoice-details"}
				marginTop={10}
				xs
				item
				container
			>
				<Grid
					id={"pdf-holder"}
					xs={12}
					sm={12}
					md={6}
					lg={6}
					xl={6}
					item
				>
					aqui vai o pfd
				</Grid>
				<Grid
					xs={12}
					sm={12}
					md={6}
					lg={6}
					xl={6}
					padding={2}
					item
					container
				>
					<Grid
						xs={12}
						sm={12}
						md={3}
						lg={3}
						xl={3}
						item
					>
						<Typography variant={"h6"} className={"heading-title"}>
							{currentInvoice.number}
						</Typography>
					</Grid>
					<Grid
						xs={12}
						sm={12}
						md={9}
						lg={9}
						xl={9}
						item
					>
						<Typography variant={"h6"}>
							<span className={"validating-span"}>
								Validating
							</span>
						</Typography>
					</Grid>
					<Grid
						xs={12}
						sm={12}
						md={12}
						lg={12}
						xl={12}
						marginTop={2}
						marginBottom={2}
						item
					>
						<Typography
							variant={"h5"}
							align={"center"}
							className={"heading-title"}
						>
							Vendor details
						</Typography>
					</Grid>
					<VendorDetails currentInvoice={currentInvoice} />

					<Grid
						xs={12}
						sm={12}
						md={12}
						lg={12}
						xl={12}
						marginTop={2}
						marginBottom={2}
						item
					>
						<Typography
							variant={"h5"}
							align={"center"}
							className={"heading-title"}
						>
							Invoice details
						</Typography>
					</Grid>
					<InvoiceDetails currentInvoice={currentInvoice} />
				</Grid>
			<Grid
				item
				xs={12}
				sm={12}
				md={12}
				lg={12}
				xl={12}
			>
				<InvoicesTable invoices={invoices}/>
			</Grid>
			</Grid>
		</Wrapper>
	);
};

export default Details;