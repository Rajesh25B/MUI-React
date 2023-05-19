import { Box, Grid } from "@mui/material"


function MuiGrid() {
  return (
    <>
    <Grid container my={4} rowSpacing={2} columnSpacing={2}>
        <Grid item xs={6}>
            <Box bgcolor="primary.light" p={2}>
                item1
            </Box>
        </Grid>
        <Grid item xs={6}>
            <Box bgcolor="primary.light" p={2}>
                item2
            </Box>
        </Grid>
        <Grid item xs={6}>
            <Box bgcolor="primary.light" p={2}>
                item3
            </Box>
        </Grid>
        <Grid item xs={6}>
            <Box bgcolor="primary.light" p={2}>
                item4
            </Box>
        </Grid>
    </Grid>
    </>
  )
}

export default MuiGrid