import { Stack, Typography } from "@mui/material";

export function MuiTypography() {
  return (
    <>
      <Stack spacing={4}>
        <Typography>Typography Practice</Typography>
        <Typography variant="h1" color="primary" align="center">
          Welcome
        </Typography>
        <Typography variant="h2" color="secondary" align="justify">
          Welcome
        </Typography>
        <Typography variant="h3" component="h1" color="error" align="right">
          Welcome
        </Typography>
      </Stack>
    </>
  );
}
