import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import * as THREE from "three";

import { Email, Send, Phone } from "@mui/icons-material";
import Animation from "../Animation/Animation";
import Header from "../Header/Header";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";

let Contact = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  let renderer;

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  //Create a PointLight and turn on shadows for the light
  const light = new THREE.PointLight(0xffffff, 1, 1000);
  light.position.set(20, 20, 10);
  const light2 = new THREE.PointLight(0xffffff, 0.4, 100);
  light2.position.set(-20, 10, -40);
  scene.add(light);
  scene.add(light2);

  camera.position.z = 5;
  let animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  };

  useEffect(() => {
    let canvas = document.getElementById("contact-canvas");
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

    animate();
  });
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
        <div id="contact-text">
          <canvas id="contact-canvas"></canvas>
        </div>
      </Box>
    </>
  );
};

export default Contact;
