import { Card, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

let Member = (props) => {
  return (
    <Grid item xs={3}>
      <Card>
        <div className="team-card-socials"></div>
        <CardMedia
          component="img"
          alt={props.name}
          height="140"
          image={"/assets/images/team/" + props.pfp}
        />
        <CardContent>
          <Typography gutterBottom variant="body1">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.position}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default Member;
