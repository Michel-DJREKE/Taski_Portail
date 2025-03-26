
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FAQ from '@/components/home/FAQ';
import { useTranslation } from 'react-i18next';

const FaqPage = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="py-16 bg-taski-light dark:bg-taski-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Questions <span className="text-gradient dark:text-gradient-dark">fréquentes</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto dark:text-foreground-dark/70">
              Trouvez rapidement des réponses à vos questions sur TASKI et découvrez comment notre plateforme peut vous aider à optimiser votre productivité.
            </p>
          </div>
        </div>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default FaqPage;
