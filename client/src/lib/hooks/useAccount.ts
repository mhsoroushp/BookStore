import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";
import agent from "../api/agent";
import type { RegisterSchema } from "../schemas/registerSchema";

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

    const userRegister = useMutation({
        mutationFn: async (creds: RegisterSchema) => {
            await agent.post('/account/register', creds);
        }, 
        onSuccess: async () => {
            await navigate('/login');
        }   
    });

    const { data: currentUser, isLoading: isUserLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const response = await agent.get<User>('/account/user-info');
            return response.data;
        } 
    });

    const logout = useMutation({
        mutationFn: async () => {
            await agent.post('/account/logout');
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
            navigate('/login');
        }
    });

    return {
        userLogin,
        userRegister, 
        currentUser, 
        isUserLoading,
        logout
    };
}