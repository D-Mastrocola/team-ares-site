import { Typography } from "@mui/material";

let FeatureCard = ({ background, title }) => {
  return (
    <div
    class="feature-card">
      <div
        class="feature-card-image"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div class='feature-card-text'>
        <Typography variant="h3" component="h4">
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default FeatureCard;
