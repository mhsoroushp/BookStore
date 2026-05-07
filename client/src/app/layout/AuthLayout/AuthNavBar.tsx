
import { Box, AppBar, Toolbar, Typography, Container } from "@mui/material"; 

export default function AuthNavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)' }}>
                <Container maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img src="/images/books/book_logo.png" alt="Logo" style={{ height: '40px', marginRight: '16px', borderRadius: '5px' }} />
                            <Typography variant="h6" sx={{ color: 'white' }}>
                                Bookstore
                            </Typography>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}