import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Container, Button, CircularProgress } from "@mui/material"; 
import { NavLink } from "react-router";
import UserMenu from "./UserMenu";
import { Observer } from "mobx-react-lite";
import MenuItemLink from "../shared/components/MenuItemLink";
import { useStore } from "../../lib/hooks/useStore";

export default function NavBar() {
    const { accountStore, uiStore } = useStore(); 
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)' }}>
                <Container maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <Button component={NavLink} to='/' sx={{ display: 'flex', gap: 2, color: 'inherit' }}>
                                <Group fontSize='large' />
                                <Typography variant="h4" sx={{fontWeight:'bold'}}>Best Books</Typography>
                            </Button>
                        </Box>
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
                        <Box sx={{display: 'flex'}}>
                            <MenuItemLink  to='/books'>
                                Books
                            </MenuItemLink>
                        </Box>
                        <Box>
                            {
                                accountStore.currentUser ? (<UserMenu />) : (
                                    <Button component={NavLink} to='/login' sx={{ color: 'inherit' }}>
                                        Login
                                    </Button>
                                )
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}