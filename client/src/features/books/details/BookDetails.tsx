import { Card, CardContent, CardMedia, Typography, CardActions, Button} from "@mui/material"

type Props = {
    selectedBook?: Book
    onCancelSelect: () => void
    openForm: (id?: string) => void
}

export default function BookDetails({ selectedBook, onCancelSelect, openForm }: Props) {
    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardMedia
                component='img'
                src={`/images/books/hero.png`}
            />
            <CardContent>
                <Typography variant="h5">{selectedBook?.title}</Typography>
                <Typography variant="body1">{selectedBook?.description}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => openForm(selectedBook?.id)} color="primary">Edit</Button>
                <Button onClick={onCancelSelect} color='inherit'>Cancel</Button>
            </CardActions>
        </Card>
    )
} 