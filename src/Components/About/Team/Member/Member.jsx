import { Card, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';

let Member = () => {
  return (
    <Grid item xs={3}>
      <Card>
        <div className="team-card-socials">

        </div>
        <CardMedia
          component="img"
          alt="Dominic Mastrocola"
          height="140"
          image="/assets/images/chxpo.png"
        />
        <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          Dominic Mastrocola
        </Typography>
        <Typography variant="body2" color="text.secondary">
          CEO
        </Typography>
      </CardContent>
      </Card>
    </Grid>
  );
};
export default Member;
