import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import agent from "../api/agent";

export const useAccount = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const userLogin = useMutation({
        mutationFn: async (creds: {email: string, password: string}) => {
            await agent.post('/login?useCookies=true', creds);
    }, 
    onSuccess: async () => {
        queryClient.invalidateQueries(
            {queryKey: ['user']}
        );
        await navigate('/books');
    }   
    });


    return {
        userLogin
    };
}