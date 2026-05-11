
import { Box, AppBar, Toolbar, Container, Typography, CircularProgress } from "@mui/material";
import { useStore } from "../../../lib/hooks/useStore"; 
import { Observer } from "mobx-react-lite";

export default function AuthNavBar() {
    const { uiStore } = useStore()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)' }}>
                <Container maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Observer>
                            {() => 
                                uiStore.isLoading ? (
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <CircularProgress
                                        size={20}
                                        thickness={7}
                                        sx={{
                                            color: 'white',
                                            mr: 2,
                                        }}
                                    />
                                </Box>
                                ) : null
                            }
                        </Observer>
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