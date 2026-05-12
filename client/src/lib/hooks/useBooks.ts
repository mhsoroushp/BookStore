import {useQuery, keepPreviousData } from "@tanstack/react-query";
import agent from "../api/agent";

export const useBooks =(cursor: string | null= null, booksPerPage: number) => {

    const { isPending, data: paginatedBooks } = useQuery({
    queryKey: ['books-paginated', cursor],
        queryFn: async () => {
            const params = new URLSearchParams();
            if (cursor) params.append('cursor', cursor);
            params.append('take', booksPerPage.toString());

            const response = await agent.get<PaginatedBooks>(
                `/book/paginated?${params.toString()}`
            );
            return response.data;
        },
        placeholderData: keepPreviousData,
        retry: false
    });

    return {
        paginatedBooks,
        isPending
    };
}