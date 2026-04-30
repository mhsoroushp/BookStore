import {useQuery } from "@tanstack/react-query";
import agent from "../api/agent";

export const useBooks =() => {
    // const queryClient = useQueryClient();

    const { isPending, data: books } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const response = await agent.get<Book[]>('/books');
            return response.data;
        }
    });

    return {
        books,
        isPending
    }
}