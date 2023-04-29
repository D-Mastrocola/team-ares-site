import { Component } from "react";
import Animation from "../Animation/Animation";
import Header from "../Header/Header";

class Landing extends Component {
  constructor(props) {
    super(props);
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
            src="./assets/videos/landing-video.m4v"
            id="landing-video"
          ></video>
        </section>
        <Header />
        <main>
          <div id='main-founders-text'>
            <h1>Team Ares</h1>
            <p>
              Welcome to Team Ares! We are a gaming organization based in
              Scottsdale, Arizona that was founded in March 2020 by Giovanni
              Tremonte, Garrett Leake, and Kaden Elsasser. At Team Ares, we are
              home to a talented group of content creators who represent our
              brand across various social media platforms. Our creators produce
              engaging and entertaining content in the form of streams,
              podcasts, social media posts, and videos that resonates with our
              community. These creators are among the most popular and
              inflauential in the gaming industry, and their contributions help
              to drive the success of Team Ares. In addition to our content
              creators, Team Ares also has a strong presence on social media,
              with a large and active following on platforms such as Twitter,
              Instagram, and YouTube. Through our social media channels, we stay
              connected with our community and share updates, news, and
              behind-the-scenes content with our followers. At Team Ares, our
              mission is to create a positive and inclusive environment where
              aspiring gamers of all ages and backgrounds can unite and support
              each other as they strive to become the best versions of
              themselves. We believe that collaboration and partnership are key
              to building a strong community, and we emphasize keeping our
              members, fanbase, and grinders close and helping them achieve
              their goals. Thank you for visiting our website and we look
              forward to connecting with you!
            </p>
            <a href='./about' className="btn">Learn More</a>
          </div>
          <div id="main-founders-visual">
            <img
              src="./assets/images/header-logo-black-no-text.png"
              alt="Ares Logo Black"
            />
          </div>
        </main>
      </>
    );
  }
}

export default Landing;
