let FeatureCard = ({background}) => {
    return (
        <div class='feature-card' style={{backgroundImage: `url(${background})`}}></div>
    );
};

export default FeatureCard;