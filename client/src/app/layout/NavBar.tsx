import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Container, Button } from "@mui/material"; 
import { NavLink } from "react-router";
import UserMenu from "./UserMenu";
// import { useAccount } from "../../lib/hooks/useAccount";
import MenuItemLink from "../shared/components/MenuItemLink";
import { useStore } from "../../lib/hooks/useStore";

export default function NavBar() {
    const { accountStore } = useStore(); 
    // const {currentUser} = useAccount();
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
                        <Box sx={{display: 'flex'}}>
                            <MenuItemLink  to='/books'>
                                Books
                            </MenuItemLink>
                            {/* <MenuItemLink to='/home materials'>
                                Home Materials
                            </MenuItemLink> */}
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