import Axios from "axios";

const BASE_URL = `http://localhost:3000/`;

const get = (url) => {
    return Axios.get(`${BASE_URL}${url}`);
}


const HttpClient = {
    get
};

export default HttpClient;


