import axios from "axios";
const request = axios.create({
    baseURL: "http://localhost:8001/",
    timeout: 1000,
    headers: { access_key: import.meta.env.VITE_SOME_KEY },
});

export default request;