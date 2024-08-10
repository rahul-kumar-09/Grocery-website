import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import FeatureSectionFruits from "./components/FeatureSectionFruits";
import FeaturesSectionBreakfast from "./components/FeaturesSectionBreakfast";
import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import NewsLatter from "./components/NewsLatter";
import FeaturesSection from "./components/FeaturesSection";

function App() {
  return (
    <div className="border-b">
      <Navbar />
      <Hero />
      <Category />
      <FeatureSectionFruits />
      <FeaturesSectionBreakfast />
      <BannerSection />
      <BlogSection />
      <NewsLatter />
      <FeaturesSection />
    </div>
  );
}

export default App;
