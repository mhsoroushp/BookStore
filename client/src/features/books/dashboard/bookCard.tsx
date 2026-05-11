import { Box, Typography } from "@mui/material";

export default function BookCard() {
    return (
        <Box sx={{ border: '1px solid #ccc', padding: 2, margin: 2 }}>
            <Typography variant="h6">Sample Book Title</Typography>
            <Typography variant="body2">Sample Book Author</Typography>
        </Box>
    )
}