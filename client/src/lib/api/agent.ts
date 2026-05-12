
import axios from "axios";
import { store } from "../stores/store";
import { toast } from 'react-toastify';
import { router } from "../../app/router/routes";

const agent = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

agent.interceptors.request.use(config => {
    store.uiStore.isBusy();
    return config;
});

agent.interceptors.response.use(
    async response => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        store.uiStore.isIdle();
        return response;
    },
     async error => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const {data, status} = error.response;
        switch (status) {
            case 400:
                if (data.errors) {
                    const modalStateErrors = [];
                    for (const key in data.errors) {
                        if (data.errors[key]) {
                            modalStateErrors.push(data.errors[key])
                        }
                    }
                    throw modalStateErrors.flat();
                } else {
                    toast.error(data);
                    toast.error('Bad Request');
                }
                break;
            case 401:
                toast.error('Unauthorized');
                break;
            case 404:
                router.navigate('/not-found');
                break;
            case 500:
                toast.error('Server Error');   
                break;
        }
        return Promise.reject(error);
    }
);

export default agent;

