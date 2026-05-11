import {Box} from "@mui/material"
import BookList from "./bookList"


export default function BookDashboard() {
    return (
        <Box sx={{borderColor:"000000", borderWidth: 1, borderStyle: 'solid', padding: 2}}>
            <BookList />
        </Box>
    )
}