import { Component } from "react";
import Member from "./Member/Member";
import { Grid } from "@mui/material";
import anime from "animejs";

class Team extends Component {
  constructor(props) {
    super(props);
  }
  animate() {
    anime.timeline({}).add({
      targets: ".member-card",
      opacity: 1,
      easing: 'linear',
      duration: 1200,
      delay: (el, i) => i * 100,
    });
  }
  componentDidMount() {
    this.animate();
  }
  render() {
    return (
      <div id="team">
        <Grid container spacing={1}>
          <Member
            name="Garrett Leake"
            position="Owner"
            pfp="garrett-leake.webp"
          />
          <Member
            name="Giovanni Tremonte"
            position="Owner"
            pfp="giovanni-tremonte.webp"
          />
          <Member name="Chris Carr" position="Owner" pfp="chris-carr.webp" />
          <Member name="Thomas King" position="Owner" pfp="thomas-king.webp" />
          <Member
            name="Andrew Perna"
            position="General Manager"
            pfp="andrew-perna.webp"
          />
          <Member
            name="Shayel Khatiwoda"
            position="Content Manager"
            pfp="shayel-khatiwoda.webp"
          />
          <Member
            name="Morgun Hill"
            position="Community Manager"
            pfp="morgun-hill.webp"
          />
          <Member
            name="Julian Caraballo"
            position="Social Media Manager"
            pfp="julian-caraballo.webp"
          />
          <Member
            name="Chandler Gilbert"
            position="Community Manager"
            pfp="chandler-gilbert.webp"
          />
          <Member
            name="Arturo Georg"
            position="Management"
            pfp="arturo-georg.webp"
          />
        </Grid>
      </div>
    );
  }
}

export default Team;
