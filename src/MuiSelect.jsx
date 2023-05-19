import { Box, TextField, Typography, MenuItem} from "@mui/material";

export function MuiSelect() {  
  return (
    <>
      <Typography>MUI-Select Practice</Typography>
      <Box width="250px">
        <TextField label="Enter your name" variant="outlined" size="small" select fullWidth>
        <MenuItem value="IND">India </MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="UK">UK </MenuItem>
        </TextField>
      </Box>
    </>
  );
} 
 