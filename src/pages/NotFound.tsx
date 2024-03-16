import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";


function NotFound() {
	return (
		<Grid>
			<Typography variant={"h4"} align={"center"}>
				Ooooopppsssssss
			</Typography>
			<Typography variant={"h5"} align={"center"}>
				<Link to={"/"}>What you're looking for is here</Link>
			</Typography>

		</Grid>
	);
}

export default NotFound;