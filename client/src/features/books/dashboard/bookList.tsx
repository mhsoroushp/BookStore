import { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import BookCard from "./bookCard";
import { useBooks } from "../../../lib/hooks/useBooks";

export default function BookList() {
    const booksPerPage = 5; // Number of books to display per page

    const [cursor, setCursor] = useState<string | null>(null);
    const [cursorHistory, setCursorHistory] = useState<string[]>([]);
    const { paginatedBooks } = useBooks(cursor, booksPerPage);

    const handleNext = () => {
        if (paginatedBooks?.nextCursor) {
            setCursorHistory([...cursorHistory, cursor || '']);
            setCursor(paginatedBooks.nextCursor);
        }
    };

    const handlePrevious = () => {
        if (cursorHistory.length > 0) {
            const previousCursors = [...cursorHistory];
            const previousCursor = previousCursors.pop();
            setCursorHistory(previousCursors);
            setCursor(previousCursor || null);
        }
    };

    return (
    

        <Stack sx={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            gap: 1, 
            padding: 2,
            flexGrow:1 
            }}>
            <Button
                sx={{ height: '40px', width:'20px' }}
                variant="contained"
                startIcon={<ChevronLeft />}
                onClick={handlePrevious}
                disabled={cursorHistory.length === 0}
            >
            </Button>

            <Box 
                sx={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${booksPerPage}, minmax(250px, 1fr))`,
                    gap: 2,
                    flex:1
                }}
            >
                {paginatedBooks?.items && paginatedBooks.items.length > 0 ? (
                    paginatedBooks.items.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))
                ) : (null)}
            </Box>

            <Button
                sx={{ height: '40px' }}
                variant="contained"
                endIcon={<ChevronRight />}
                onClick={handleNext}
                disabled={!paginatedBooks?.hasNextPage}
            >
            </Button>
        </Stack>
    );
}