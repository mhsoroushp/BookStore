import {Grid, Typography} from "@mui/material"
import { useEffect, useState } from "react"
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

export default function BookDashboard() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Hadi")

    // Runs only once when component mounts (empty dependency array)
    useEffect(() => {
        console.log("Component mounted - fetching books")
        // fetchBooks();
    }, [])

    // Runs whenever 'count' state changes
    useEffect(() => {
        console.log("Count changed:", count)
    }, [count])

        // Runs whenever 'name' state changes
    useEffect(() => {
        console.log("Name is:", name)
    }, [name])

    return (
        <Grid container spacing={3}>
            <Grid size={8}>
                <Typography variant="h3" gutterBottom>
                    Books - Count: {count}
                </Typography>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
                <button onClick={() => setName(name === "Hadi" ? "John" : "Hadi")}>Change Name</button>
                {/* <BookList /> */}
            </Grid>
            <Grid size={4}>
                {/* <BookFilters /> */}
            </Grid>
        </Grid>
    )
}