import Animation from "../Animation/Animation";
import Header from "../Header/Header";
import Team from "./Team/Team";
import Typography from "@mui/material/Typography";

let About = () => {
  return (
    <>
      <Animation page="about" />
      <Header />
      <main>
        <div id="main-founders-text">
          <Typography variant="h4" component='h2'>Team Ares</Typography>
          <Typography variant="body2">
            &emsp;Welcome to Team Ares! We are a gaming organization based in
            Scottsdale, Arizona that was founded in March 2020 by Giovanni
            Tremonte, Garrett Leake, and Kaden Elsasser.
          </Typography>
          <Typography variant="body2">
            &emsp;At Team Ares, we are home to a talented group of content
            creators who represent our brand across various social media
            platforms. Our creators produce engaging and entertaining content in
            the form of streams, podcasts, social media posts, and videos that
            resonates with our community. These creators are among the most
            popular and inflauential in the gaming industry, and their
            contributions help to drive the success of Team Ares.
          </Typography>
          <Typography variant="body2">
            &emsp;In addition to our content creators, Team Ares also has a
            strong presence on social media, with a large and active following
            on platforms such as Twitter, Instagram, and YouTube. Through our
            social media channels, we stay connected with our community and
            share updates, news, and behind-the-scenes content with our
            followers. At Team Ares, our mission is to create a positive and
            inclusive environment where aspiring gamers of all ages and
            backgrounds can unite and support each other as they strive to
            become the best versions of themselves.{" "}
          </Typography>
          <Typography variant="body2">
            &emsp;We believe that collaboration and partnership are key to
            building a strong community, and we emphasize keeping our members,
            fanbase, and grinders close and helping them achieve their goals.
            Thank you for visiting our website and we look forward to connecting
            with you!
          </Typography>
        </div>
        <Team />
      </main>
    </>
  );
};

export default About;
