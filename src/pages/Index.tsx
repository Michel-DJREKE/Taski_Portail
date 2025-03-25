import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
// import Pricing from "@/components/home/PricingOld";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import CallToAction from "@/components/home/CallToAction";
import PricingNew from "./PricingNew";
import Pricing from "@/components/auth/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Pricing />
        
        {/* <PricingNew /> */}
        <FAQ />
        <Contact />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
