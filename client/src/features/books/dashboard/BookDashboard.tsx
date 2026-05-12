import {Box, Typography} from "@mui/material"
import BookList from "./bookList"


export default function BookDashboard() {
    return (
        <Box sx={{width: '100%',  borderColor:"000000", borderWidth: 1, borderStyle: 'solid', padding: 0}}>
            <Typography variant="h4" sx={{padding: 2, fontWeight: 'bold', color: 'primary.main'}}>
                Book Dashboard
            </Typography>
            <Box>
                <BookList />
            </Box>
        </Box>
    )
}