import {Grid, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Grid container spacing={3}>
        <Grid size={8}>
            <Typography variant="h3" gutterBottom>
                Home page area
            </Typography>
            {/* <BookList /> */}
        </Grid>
        <Grid size={4}>
            {/* <BookFilters /> */}
        </Grid>
    </Grid>
  )
}