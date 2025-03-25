
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Gratuit",
      description: "Pour les petits projets et les débutants.",
      price: isAnnual ? "0" : "0",
      discountedPrice: null,
      features: [
        "Gestion de tâches basique",
        "Collaboration avec trois membres",
        "Stockage limité (500 Mo)",
        "Projets limités (3 max)",
      ],
      notIncluded: [
        "Fonctionnalités avancées",
        "Collaboration illimitée",
        "Stockage augmenté",
        "Statistiques détaillées",
        "Personnalisation avancée",
        "Support prioritaire",
      ],
      popular: false,
      buttonText: "Commencer gratuitement",
      buttonVariant: "outline" as const,
    },
    {
      name: "Premium",
      description: "Pour les équipes et les professionnels.",
      price: isAnnual ? "150000" : "15000",
      discountedPrice: isAnnual ? "12500" : null,
      features: [
        "Gestion de tâches basique",
        "Collaboration avec trois membres",
        "Stockage limité (500 Mo)",
        "Fonctionnalités avancées",
        "Collaboration illimitée",
        "Stockage augmenté (10 Go)",
        "Statistiques détaillées",
        "Projets illimités",
      ],
      notIncluded: [
        "Personnalisation avancée",
        "Support prioritaire",
        "Sécurité renforcée",
        "Intégration avec des outils tiers",
      ],
      popular: true,
      buttonText: "S'abonner",
      buttonVariant: "default" as const,
    },
    {
      name: "Entreprise",
      description: "Pour les grandes organisations.",
      price: isAnnual ? "350000" : "35000",
      discountedPrice: isAnnual ? "291666" : null,
      features: [
        "Gestion de tâches basique",
        "Collaboration avec trois membres",
        "Stockage limité (500 Mo)",
        "Fonctionnalités avancées",
        "Collaboration illimitée",
        "Stockage augmenté (100 Go)",
        "Statistiques détaillées",
        "Personnalisation avancée",
        "Support prioritaire",
        "Sécurité renforcée",
        "Intégration avec des outils tiers",
      ],
      notIncluded: [],
      popular: false,
      buttonText: "Contacter les ventes",
      buttonVariant: "default" as const,
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
      
      <div className="taski-container p-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Des Plans Simples et Transparents
          </motion.h1>
          <motion.p 
            className="text-lg text-foreground/80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choisissez l'offre qui convient à vos besoins et améliorez votre productivité dès aujourd'hui.
          </motion.p>
          
          <motion.div 
            className="inline-flex items-center p-1 bg-gray-300 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <button
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                !isAnnual ? "bg-taski-secondary text-primary-foreground shadow-md" : "text-foreground/70 hover:text-foreground"
              )}
              onClick={() => setIsAnnual(false)}
            >
              Mensuel
            </button>
            <button
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                isAnnual ? "bg-taski-primary text-primary-foreground shadow-md" : "text-foreground/70 hover:text-foreground"
              )}
              onClick={() => setIsAnnual(true)}
            >
              Annuel <span className="text-xs font-normal ml-1 opacity-80">(-16%)</span>
            </button>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16 "
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={fadeIn}
              className={cn(
                plan.popular ? "pricing-card-popular" : "pricing-card",
                "flex flex-col"
              )}
              whileHover={{ translateY: -8, transition: { duration: 0.3 } }}
            >
              {plan.popular && <div className="pricing-badge">Populaire</div>}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-sm text-foreground/70 mt-2">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-end">
                  <span className="text-4xl font-bold">
                    {plan.discountedPrice ? 
                      parseInt(plan.discountedPrice).toLocaleString('fr-FR') : 
                      parseInt(plan.price).toLocaleString('fr-FR')}
                  </span>
                  <span className="text-foreground/70 ml-2 mb-1">
                    FCFA{isAnnual ? '/an' : '/mois'}
                  </span>
                </div>
                {plan.discountedPrice && (
                  <div className="text-sm text-foreground/60 line-through mt-1">
                    {parseInt(plan.price).toLocaleString('fr-FR')} FCFA{isAnnual ? '/an' : '/mois'}
                  </div>
                )}
              </div>
              
              <div className="mb-8 flex-1">
                <h4 className="font-medium mb-3 text-sm">Caractéristiques incluses:</h4>
                <ul className="space-y-3">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start text-sm">
                      <span className="flex-shrink-0 mr-2 mt-1 text-taski-500">
                        <Check size={16} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map(feature => (
                    <li key={feature} className="flex items-start text-sm text-foreground/50">
                      <span className="flex-shrink-0 mr-2 mt-1">
                        <X size={16} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto">
                <Button 
                  variant={plan.buttonVariant} 

                  className="w-full bg-taski-primary hover:bg-green-800 text-taski-light"
                  asChild
                >
                  <Link to="/auth">
                    {plan.buttonText}
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        

      </div>
  );
};

export default Pricing;
