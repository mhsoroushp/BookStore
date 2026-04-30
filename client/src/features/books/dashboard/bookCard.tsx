import { Avatar, Box, Button, Card, CardContent, CardHeader, Divider, Typography } from "@mui/material";
import { Link } from "react-router";

type Props = {
    book: Book
}

export default function BookCard({book}: Props) {
    return (
        <Card elevation={3} sx={{ borderRadius: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <CardHeader
                    avatar={<Avatar sx={{ height: 80, width: 80 }} />}
                    title={book.title}
                    slotProps={{
                        title: {
                            fontWeight: 'bold',
                            fontSize: 20
                        }
                    }}
                    subheader={
                        <>
                            Hosted by{' '}
                            <Link to={`/profiles/bob`}>Bob</Link>
                        </>
                    }
                />
                {/* <Box display='flex' flexDirection='column' gap={2} mr={2}>
                    {(isHost || isGoing) && <Chip label={label} color={color} sx={{ borderRadius: 2 }} />}
                    {isCancelled && <Chip label='Cancelled' color='error' sx={{ borderRadius: 2 }} />}
                </Box> */}
            </Box>
            <Divider sx={{ mb: 3 }} />
            <CardContent sx={{ p: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, px: 2 }}>
                    {/* <Box display='flex' flexGrow={0} alignItems='center'>
                        <AccessTime sx={{ mr: 1 }} />
                        <Typography variant="body2" noWrap>
                            {formatDate(book.date)}
                        </Typography>
                    </Box> */}
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', gap: 2, backgroundColor: 'grey.200', py: 3, pl: 3 }}>
                    <Typography variant="body2">
                        Attendees go here
                    </Typography>
                </Box>
            </CardContent>
            <CardContent sx={{ paddingBottom: 3 }}>
                <Typography variant="body2">
                    {book.description}
                </Typography>
                <Button
                    component={Link}
                    to={`/activities/${book.id}`}
                    variant="contained"
                    color="primary"
                    sx={{ display: 'flex', justifySelf: 'self-end', borderRadius: 3 }}
                >
                    View
                </Button>
            </CardContent>
        </Card>
    )
}   