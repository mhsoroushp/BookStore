
import axios from "axios";

const API_URL = "/data/books.json";

const agent = axios.create({
    baseURL: API_URL
});

agent.interceptors.response.use(async response => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return response;
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
})

export default agent;

