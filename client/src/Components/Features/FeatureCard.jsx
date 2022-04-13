import React from "react";


const FeatureCard = (props) => {
  const {feature}= props
  return (
    <div className="feature">
      <img src={feature.icon} alt={feature.icon} />
      <h4>{feature.name}</h4>
      <p>
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureCard;
