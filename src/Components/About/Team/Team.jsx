import { Component } from "react";
import Member from "./Member/Member";
import { Grid } from "@mui/material";

class Team extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="team">
        <Grid container spacing={2}>
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
        </Grid>
      </div>
    );
  }
}

export default Team;
