import React from "react";
import FeatureCard from "./FeatureCard";
import time from './time.png';
import guarantee from './guarantee.png';
import payment from './payment.png';
import quality from './quality.png';

import "./Features.css";

const features = [
  {
    icon: time,
    name: "Quick Deliver",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: payment,
    name: "Secure Payment",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: quality,
    name: "Best Quality",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: guarantee,
    name: "Return Guarantee",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const Features = () => {
  return (
    <div className="container features">
    {features.map((feature,index)=>{
      return <FeatureCard  key={index} feature={feature} />
    })}
    </div>
  );
};

export default Features;
