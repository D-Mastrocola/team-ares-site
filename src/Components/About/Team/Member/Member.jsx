import {
  Card,
  Grid,
  IconButton,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";

let Member = (props) => {
  return (
    <ImageListItem className='member-card' key={props.pfp} cols={1} rows={1}>
      <img
        alt={props.name}
        className="team-pfp"
        src={"/assets/images/team/" + props.pfp }
      />
      <ImageListItemBar
        title={props.name}
        subtitle={props.position}
        actionIcon={
          <IconButton
            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
            aria-label={`info about ${props.name}`}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};
export default Member;
