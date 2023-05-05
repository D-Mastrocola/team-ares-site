import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import Header from "../Header/Header";
import Typography from "@mui/material/Typography";

let Contact = () => {
  return (
    <>
      <Header />
      <Box
        id="about-main"
        component="main"
        sx={{ display: "flex", flexWrap: "wrap" }}
      >
        <form>
          <Typography variant="h3" component="h2">
            Contact
          </Typography>
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
                <InputAdornment position="start">Email Icon</InputAdornment>
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
          <button className='btn' id='contact-submit'>Send</button>
        </form>
      </Box>
    </>
  );
};

export default Contact;
