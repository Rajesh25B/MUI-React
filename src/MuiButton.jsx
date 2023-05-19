import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  Typography,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

export function MuiButton() {
  return (
    <>
      <Stack display="block" spacing={2} direction="row">
        <Typography variant="h3" align="center" color="primary">
          MUI Button Practice
        </Typography>
        <Button
          variant="text"
          color="warning"
          size="small"
          startIcon={<AcUnitIcon />}
        >
          Click
        </Button>
        <Button
          variant="contained"
          color="info"
          size="medium"
          startIcon={<AccountBalanceIcon />}
        >
          Home
        </Button>
        <Button variant="outlined" color="success" size="large">
          Large
        </Button>
        <IconButton
          aria-label="send"
          size="large"
          color="success"
          onClick={() => alert("I clicked")}
          disableRipple
        >
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="outlined" orientation="vertical">
          <Button>Login</Button>
          <Button>Signup</Button>
          <Button>Register</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </Stack>
    </>
  );
}
