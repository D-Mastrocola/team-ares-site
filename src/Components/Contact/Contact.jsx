import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from "@mui/material";

import { Email, Send, Phone } from "@mui/icons-material";
import Animation from "../Animation/Animation";
import Header from "../Header/Header";
import Typography from "@mui/material/Typography";

let Contact = () => {
  return (
    <>
      <Animation page="about" />
      <Header />
      <Box
        id="about-main"
        component="main"
        sx={{ display: "flex", flexWrap: "wrap" }}
      >
        <form>
          <div id='form-title'>
            <Typography variant="h4" component="h2">
              Contact
            </Typography>
            <Typography variant="subtitle2">
              <Phone fontSize="small" /> (505)-305-4417
              <br />
              <Email fontSize="small" /> contact@teamares.gg
            </Typography>
          </div>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <TextField id="contact-first-name" label="First Name" />
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <TextField id="contact-last-name" label="Last Name" />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: "52ch" }}>
            <InputLabel htmlFor="contact-email">Email</InputLabel>
            <OutlinedInput
              id="contact-email"
              startAdornment={
                <InputAdornment position="start">
                  <Email fontSize="small" />
                </InputAdornment>
              }
              label="Email"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: "52ch" }}>
            <TextField
              id="contact-message"
              label="Message"
              multiline
              rows={4}
            />
          </FormControl>
          <button className="btn" id="contact-submit">
            <Send fontSize="small" />
            Send
          </button>
        </form>
        <div id="contact-text"></div>
      </Box>
    </>
  );
};

export default Contact;
