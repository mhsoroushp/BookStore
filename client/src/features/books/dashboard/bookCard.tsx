import { Box, Typography, Button } from "@mui/material";

interface BookCardProps {
    book: Book;
}

export default function BookCard({ book }: BookCardProps) {
    return (
        <Box sx={{ 
            border: '1px solid #ccc', 
            padding: 2, 
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            height: '100%',
            boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
            '&:hover': { boxShadow: '0px 4px 8px rgba(0,0,0,0.15)' }
        }}>
            <Typography variant="h6">{book.title}</Typography>
            <Typography variant="body2" color="textSecondary">{book.author}</Typography>
            <Typography variant="body1" sx={{ mt: 'auto', fontWeight: 'bold', color: 'primary.main' }}>
                ${book.price}
            </Typography>
            {book.description && (
                <Typography variant="caption">{book.description}</Typography>
            )}
            <Button variant="contained" size="small" sx={{ mt: 1 }}>
                Add to Cart
            </Button>
        </Box>
    );
}