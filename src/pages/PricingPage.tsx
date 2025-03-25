import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Pricing from "@/components/home/PricingOld";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="py-16 bg-taski-light dark:bg-taski-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Plans et{" "}
              <span className="text-gradient dark:text-gradient-dark">
                tarification
              </span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto dark:text-foreground-dark/70">
              Choisissez le plan qui convient le mieux à vos besoins et
              commencez à optimiser votre productivité dès aujourd'hui.
            </p>
          </div>
        </div>
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
