import axios from 'axios';

require('dotenv').config();

axios.defaults.headers.commmon['x-auth'] = process.env.REACT_APP_USER_TOKEN;

export default axios;