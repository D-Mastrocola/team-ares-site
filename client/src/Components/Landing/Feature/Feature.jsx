import Typography from "@mui/material/Typography";
import FeatureCard from "./FeatureCard/FeatureCard";

let Feature = () => {
  return (
    <main>
      <Typography style={{width: '100%'}}variant="h2" component="h2">
        What's New
      </Typography>
      <FeatureCard title={'Welcome Morgun Hill'} background={'https://publicsite-wordpress-storage-public.insiderintelligence.com/wp-content/uploads/2021/08/03202052/esports-2021-scaled.jpeg'}/>
    </main>
  );
};
export default Feature;
