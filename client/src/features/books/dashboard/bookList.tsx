import { Box, Typography } from "@mui/material";
import BookCard from "./bookCard";
import { useBooks } from "../../../lib/hooks/useBooks"; 

export default function BookList() {
    const { books, isPending } = useBooks();

    if (!books || isPending) return <Typography>Loading...</Typography>

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {books.map((book) => (
                <BookCard 
                    key={book.id}
                    book={book} 
                />
            ))}
        </Box>
    )
}