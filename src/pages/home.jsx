import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full font-sans antialiased">
      <Navbar />
      <Hero />
      <div className="h-2 bg-gray-900" />
      <FeatureSection />
      <FAQ />
      <Footer />
      <BackToTop />
    </div>
  );
}