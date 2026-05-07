import {Box, Container, CssBaseline} from "@mui/material"

import { Outlet } from "react-router"
import NavBar from "./NavBar";


function App() {
  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
      <CssBaseline />
        <>
          <NavBar />
          <Container maxWidth='xl' sx={{ paddingTop: 8 }}>
            <Outlet />
          </Container>
        </>
    </Box>
  )
}

export default App
