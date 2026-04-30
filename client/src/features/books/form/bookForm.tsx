import { Box, Button, Paper, TextField} from "@mui/material"

type Props = {
    selectedBook: Book
    onSubmitForm: (data: Book) => void
    closeForm: () => void
}

export default function BookForm({selectedBook, onSubmitForm, closeForm }: Props) {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        if(selectedBook) data.id = selectedBook.id;
        onSubmitForm(data as unknown as Book);
    }

    return (
        <Paper sx={{ padding: 2 }}>
            <Box component="form" onSubmit={handleSubmit} id="book-form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField name="title" label="Title" defaultValue={selectedBook?.title} variant="outlined" />
                <TextField name="author" label="Author" defaultValue={selectedBook?.author} variant="outlined" />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <Button type="submit" form="book-form" color="primary" variant="contained">Submit</Button>
                <Button onClick={closeForm} color="inherit">Cancel</Button>
            </Box>
        </Paper>
    )
}