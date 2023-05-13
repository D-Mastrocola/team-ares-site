import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import { Email, Send, Phone } from "@mui/icons-material";
import anime from "animejs";

let ContactForm = () => {
  
  return (
    <form id="message-form">
      <div id="form-title">
        <Typography variant="h3" component="h2">
          Contact
        </Typography>
        <Typography variant="subtitle2">
          <Phone fontSize="small" /> (505)-305-4417
          <br />
          <Email fontSize="small" /> contact@teamares.gg
        </Typography>
      </div>
      <div>
        <FormControl sx={{ m: "2%", width: "46%" }} variant="outlined">
          <TextField id="contact-first-name" label="First Name" />
        </FormControl>
        <FormControl sx={{ m: "2%", width: "46%" }} variant="outlined">
          <TextField id="contact-last-name" label="Last Name" />
        </FormControl>
      </div>

      <FormControl fullWidth sx={{ m: "2%", width: "96%" }}>
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
      <FormControl fullWidth sx={{ m: "2%", width: "96%" }}>
        <TextField id="contact-message" label="Message" multiline rows={6} />
      </FormControl>
      <button className="btn" id="contact-submit">
        <Send fontSize="small" />
        Send
      </button>
    </form>
  );
};

export default ContactForm;
