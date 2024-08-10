import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { SiAdguard } from "react-icons/si";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import FeatureCard from "./FeatureCard";

const data = [
  {
    title: "Free Shopping",
    icon: <CiShoppingCart />,
  },
  {
    title: "Best Price Guarantee",
    icon: <SiAdguard />,
  },
  {
    title: "Free Curbside Pickup",
    icon: <LiaTruckPickupSolid />,
  },
  {
    title: "Support 24/7",
    icon: <BiSupport />,
  },
];

const FeaturesSection = () => {
  return (
    <div className="container pt-16">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map((el) => (
          <FeatureCard key={el.title} title={el.title} icon={el.icon} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
