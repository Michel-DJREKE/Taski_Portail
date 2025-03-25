
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Sparkles } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Gratuit',
    price: '0',
    description: 'Parfait pour débuter avec la gestion de tâches',
    features: [
      'Gestion de tâches basique',
      'Collaboration avec 3 membres',
      'Stockage limité',
      '1 projet actif'
    ],
    cta: 'Commencer gratuitement',
    popular: false
  },
  {
    name: 'Premium',
    price: '15 000',
    frequency: '/mois',
    description: 'Toutes les fonctionnalités pour les équipes productives',
    features: [
      'Toutes les fonctionnalités avancées',
      'Collaboration illimitée',
      'Stockage augmenté',
      'Accès aux statistiques détaillées',
      'Intégrations essentielles',
      'Projets illimités'
    ],
    cta: 'Commencer l\'essai gratuit',
    popular: true
  },
  {
    name: 'Entreprise',
    price: '35 000',
    frequency: '/mois',
    description: 'Solution complète pour les grandes organisations',
    features: [
      'Personnalisation avancée',
      'Support prioritaire',
      'Sécurité renforcée',
      'Intégration avec outils tiers',
      'API dédiée',
      'Déploiement sur site disponible'
    ],
    cta: 'Contacter les ventes',
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-taski-light dark:bg-taski-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium bg-taski-primary/10 text-taski-primary rounded-full dark:bg-taski-primary/20">
            <Sparkles size={12} className="mr-1.5" />
            Plans et tarifs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Un plan adapté à <span className="text-gradient dark:text-gradient-dark">chaque besoin</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto dark:text-foreground-dark/70">
            Choisissez l'offre qui vous convient le mieux et commencez à optimiser votre productivité dès aujourd'hui.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-elevation dark:hover:shadow-dark-elevation
                ${plan.popular ? 'ring-2 ring-taski-primary scale-105 shadow-elevation dark:shadow-dark-elevation' : 'hover:translate-y-[-4px]'}
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 w-full bg-taski-primary text-white py-1 text-xs font-medium text-center">
                  Recommandé
                </div>
              )}
              <CardHeader className={`${plan.popular ? 'pt-8' : 'pt-6'}`}>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>
                  {plan.description}
                </CardDescription>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.frequency && (
                    <span className="ml-1 text-foreground/60 dark:text-foreground-dark/60">{plan.frequency}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 py-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle size={16} className="text-taski-primary mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-0 pb-6">
                <Link to="/register" className="w-full">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-taski-primary hover:bg-taski-primary/90 text-white' 
                        : 'bg-transparent hover:bg-accent border border-border dark:border-border-dark'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-foreground/60 dark:text-foreground-dark/60">
            Des besoins spécifiques ? <Link to="/contact" className="text-taski-primary hover:text-taski-primary/80 transition-colors font-medium">Contactez-nous</Link> pour une offre personnalisée.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
