import {useQuery, keepPreviousData } from "@tanstack/react-query";
import agent from "../api/agent";

export const useBooks =(cursor: string | null= null) => {

    const { isPending, data: paginatedBooks } = useQuery({
    queryKey: ['books-paginated', cursor],
        queryFn: async () => {
            const params = new URLSearchParams();
            if (cursor) params.append('cursor', cursor);
            params.append('take', '3'); // return by default 3 items

            const response = await agent.get<PaginatedBooks>(
                `/book/paginated?${params.toString()}`
            );
            return response.data;
        },
        placeholderData: keepPreviousData
    });

    return {
        paginatedBooks,
        isPending
    };
}