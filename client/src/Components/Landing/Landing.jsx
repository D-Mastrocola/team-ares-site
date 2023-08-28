import { Component } from "react";
import Animation from "../Animation/Animation";
import Header from "../Header/Header";
import Feature from "./Feature/Feature";

class Landing extends Component {
  constructor(props) {
    super(props);
  }
  transition() {
    
  }
  render() {
    return (
      <>
        <Animation page="landing" />
        <section id="landing">
          <video
            width={"100%"}
            height={"100%"}
            playsInline
            autoPlay
            loop
            muted
            src="./assets/videos/landing-video.m4v"
            id="landing-video"
          ></video>
        </section>
        <Header />
    
      </>
    );
  }
}

export default Landing;
