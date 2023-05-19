import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export function MuiTextField() {
  const [value, setValue] = useState("");
  return (
    <>
      <Typography>MUI-TextField Practice</Typography>
      <Stack direction="row" spacing={2}>
        <TextField label="Enter your name" variant="outlined" size="small" />

        <TextField
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          type="number"
          inputProps={<InputAdornment position="start">$</InputAdornment>}
        />
        <TextField id="filled-basic" label="Filled" variant="filled" error />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField
          label="Phone-Number"
          value={value}
          type="number"
          required
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            value ? "We do not share your phone-number with anyone" : "Required"
          }
        />
      </Stack>
    </>
  );
}
