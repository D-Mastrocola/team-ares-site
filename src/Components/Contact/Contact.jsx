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

  let headerSize = 80;

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  //Create a PointLight and turn on shadows for the light
  const light = new THREE.PointLight(0xffffff, 1, 1000);
  light.position.set(20, 20, 10);
  const light2 = new THREE.PointLight(0xffffff, 0.4, 100);
  light2.position.set(-3, -2, 5);
  const light3 = new THREE.PointLight(0xffffff, 0.4, 100);
  light3.position.set(-3, 5, -5);
  scene.add(light);
  scene.add(light2);
  scene.add(light3);

  camera.position.z = 1.5;

  let resizeRendererToDisplaySize = (renderer) => {

    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width = (window.innerWidth * pixelRatio) | 0;
    const height = (window.innerHeight * pixelRatio - headerSize) | 0;
    const needResize = canvas.width !== width || canvas.height !== height;
    console.log(canvas.width)
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    
    return needResize;
  };

  let animate = () => {
    requestAnimationFrame(animate);

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / (canvas.clientHeight - headerSize);
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  };

  useEffect(() => {
    let canvas = document.getElementById("contact-canvas");
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
    renderer.setSize(window.innerWidth, window.innerHeight - headerSize);

    camera.aspect = canvas.clientWidth / (canvas.clientHeight - headerSize); //80px is the header size;
    camera.updateProjectionMatrix();

    animate();
  });
  return (
    <>
      <Animation page="about" />
      <Header />
      <canvas id="contact-canvas"></canvas>
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
            <TextField
              id="contact-message"
              label="Message"
              multiline
              rows={6}
            />
          </FormControl>
          <button className="btn" id="contact-submit">
            <Send fontSize="small" />
            Send
          </button>
        </form>
      </Box>
    </>
  );
};

export default Contact;
