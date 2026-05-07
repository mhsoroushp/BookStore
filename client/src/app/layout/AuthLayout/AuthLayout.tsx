import {Box, Container, CssBaseline} from "@mui/material"
import { Outlet } from "react-router"
import AuthNavBar from "./AuthNavBar";

function AuthLayout() {
    return (
    <Box>
        <CssBaseline />
        <>
            <AuthNavBar />
            <Container maxWidth='xl' sx={{ paddingTop: 8 }}>
                <Outlet />
            </Container>
        </>
    </Box>  
    )
}

export default AuthLayout;