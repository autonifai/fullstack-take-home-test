import Axios from 'axios';

const options = {
	baseURL: process.env.REACT_APP_API,
	withCredentials: false,
	headers: {},
};

// creating the axios instance.
const Request = Axios.create(options);



export default Request;