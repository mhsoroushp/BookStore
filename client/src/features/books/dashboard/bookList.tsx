import { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import BookCard from "./bookCard";
import { useBooks } from "../../../lib/hooks/useBooks";

export default function BookList() {
    const [cursor, setCursor] = useState<string | null>(null);
    const [cursorHistory, setCursorHistory] = useState<string[]>([]);
    const { paginatedBooks } = useBooks(cursor);

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
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Typography variant="h4" gutterBottom>
                Books
            </Typography>

            {/* Books Grid */}
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 2 }}>
                {paginatedBooks?.items && paginatedBooks.items.length > 0 ? (
                    paginatedBooks.items.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))
                ) : (null)}
            </Box>

            {/* Pagination Buttons */}
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', mt: 3 }}>
                <Button
                    variant="contained"
                    startIcon={<ChevronLeft />}
                    onClick={handlePrevious}
                    disabled={cursorHistory.length === 0}
                >
                    Previous
                </Button>
                <Button
                    variant="contained"
                    endIcon={<ChevronRight />}
                    onClick={handleNext}
                    disabled={!paginatedBooks?.hasNextPage}
                >
                    Next
                </Button>
            </Stack>
        </Box>
    );
}