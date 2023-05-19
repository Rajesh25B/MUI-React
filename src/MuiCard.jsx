import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

function MuiCard() {
  return (
    <Box width="300px">
      <Card>
        <CardMedia 
        component="img"
        height='140px'
        image="https://source.unsplash.com/random"
        alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Lorem
          </Typography>
          <Typography variant="body2" color='text.secondary'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil est doloribus animi possimus suscipit quos veritatis doloremque illum dignissimos deleniti perferendis molestiae nesciunt cupiditate asperiores adipisci veniam saepe, exercitationem architecto.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default MuiCard