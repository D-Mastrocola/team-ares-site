import { Box } from "@mui/material";
import * as THREE from "three";
import Animation from "../Animation/Animation";
import Header from "../Header/Header";
import React, { useState, useEffect } from "react";
import anime from "animejs";
import ContactForm from "./ContactForm/ContactForm";
import LoadingAnimation from "../Animation/Components/LoadingAnimation";

const colorPalette = {
  primaryColor: 0xce2222,
  secondaryColor: 0x222324,
};

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

  scene.background = new THREE.Color(colorPalette.secondaryColor);

  let resizeRendererToDisplaySize = (renderer) => {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  };

  let animate = () => {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    requestAnimationFrame(animate);
  };

  let messageSentAnimation = (e) => {
    e.preventDefault();
    let formElements = document.getElementById("message-form").children;

    anime
      .timeline({})
      .add({
        targets: formElements,
        opacity: 0,
        easing: "linear",
        duration: 1200,
      })
      .add({
        targets: "#message-form",
        backgroundColor: "rgb(206, 34, 34)",
        easing: "linear",
        duration: 1000,
        update: function (anim) {
          let progress = Math.round(anim.progress);
          if (progress === 100) {
            document.getElementById("lds-ring").style.zIndex = "10";
          }
        },
      })
      .add({
        targets: "#lds-ring",
        opacity: 1,
        easing: "linear",
        duration: 1000,
      })
      .add({
        targets: "#lds-ring",
        opacity: 0,
        delay: 3000,
        easing: "linear",
        duration: 500,
      })
      .add({
        targets: "#message-form",
        backgroundColor: "rgb(255, 255, 255)",
        easing: "linear",
        duration: 500,
        update: function (anim) {
          let progress = Math.round(anim.progress);
          if (progress === 100) {
            document.getElementById("lds-ring").style.zIndex = "0";
          }
        },
      })
      .add({
        targets: formElements,
        opacity: 1,
        easing: "linear",
        duration: 500,
      });
  };

  useEffect(() => {
    let bodyEl = (document.querySelector("body").style.overflowY = "hidden");
    let canvas = document.getElementById("contact-canvas");
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
    renderer.setSize(window.innerWidth, window.innerHeight - headerSize);

    camera.aspect = canvas.clientWidth / (canvas.clientHeight - headerSize); //80px is the header size;
    camera.updateProjectionMatrix();

    let contactForm = document.getElementById("message-form");
    if (contactForm)
      contactForm.addEventListener("submit", messageSentAnimation);

    animate();
  });

  return (
    <>
      <Animation page="contact" />
      <Header />
      <canvas id="contact-canvas"></canvas>
      <Box
        id="contact-main"
        component="main"
        sx={{ display: "flex", flexWrap: "wrap" }}
      >
        <ContactForm />
        <LoadingAnimation />
      </Box>
    </>
  );
};

export default Contact;
