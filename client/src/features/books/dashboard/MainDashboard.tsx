import {Grid, Typography} from "@mui/material"
// import BookList from "./bookList";
// import BookDetails from "../details/BookDetails";
// import BookForm from "../form/bookForm";

// type Props = {
//     books : Book[]
//     selectedBook?: Book
//     onSelectBook: (id: string) => void
//     onCancelSelect: () => void
//     editMode: boolean
//     openForm: (id?: string) => void
//     onSubmitForm: (data: Book) => void
//     closeForm: () => void
// }

export default function MainDashboard() {
    return (
        <Grid container spacing={3}>
            <Grid size={8}>
                <Typography variant="h3" gutterBottom>
                    Books
                </Typography>
                {/* <BookList /> */}
            </Grid>
            <Grid size={4}>
                {/* <BookFilters /> */}
            </Grid>
        </Grid>
    )
}