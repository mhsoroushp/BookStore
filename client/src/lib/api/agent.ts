
import axios from "axios";
import { store } from "../stores/store";

const agent = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

agent.interceptors.request.use(config => {
    store.uiStore.isBusy();
    return config;
});

agent.interceptors.response.use(async response => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        store.uiStore.isIdle();
        return response;
    } catch (error) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(error);
        store.uiStore.isIdle();
        return Promise.reject(error);
    }
})

export default agent;

