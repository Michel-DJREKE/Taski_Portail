
import React from 'react';
import { Sparkles } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: "Comment commencer avec TASKI ?",
    answer: "Créez simplement un compte gratuit en quelques secondes, puis suivez notre guide de démarrage rapide pour configurer votre premier projet et inviter votre équipe."
  },
  {
    question: "Quelles sont les limites du plan gratuit ?",
    answer: "Le plan gratuit vous permet de gérer jusqu'à 3 membres dans votre équipe, avec un nombre limité de projets actifs et un stockage de base. C'est parfait pour les petites équipes ou pour tester notre plateforme."
  },
  {
    question: "Puis-je changer de plan à tout moment ?",
    answer: "Oui, vous pouvez facilement passer d'un plan à l'autre à tout moment. Si vous passez à un plan supérieur, vous serez facturé au prorata. Si vous passez à un plan inférieur, le changement prendra effet à la prochaine période de facturation."
  },
  {
    question: "Comment fonctionne la collaboration en équipe ?",
    answer: "TASKI permet à tous les membres de votre équipe de voir les tâches en temps réel, d'assigner des responsabilités, de commenter et de partager des fichiers. Vous pouvez également définir différents niveaux d'autorisations selon les rôles de chacun."
  },
  {
    question: "Est-ce que TASKI propose des intégrations avec d'autres outils ?",
    answer: "Oui, TASKI s'intègre avec de nombreux outils populaires comme Google Drive, Slack, GitHub, et bien d'autres. Les intégrations avancées sont disponibles dans nos plans Premium et Entreprise."
  },
  {
    question: "Comment contacter le support client ?",
    answer: "Vous pouvez contacter notre équipe de support via le formulaire de contact sur notre site, par email à support@taski.com, ou directement depuis l'application via le chat intégré pour les clients Premium et Entreprise."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-taski-light dark:bg-taski-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium bg-taski-primary/10 text-taski-primary rounded-full dark:bg-taski-primary/20">
            <Sparkles size={12} className="mr-1.5" />
            Questions fréquentes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Tout ce que vous devez <span className="text-gradient dark:text-gradient-dark">savoir</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto dark:text-foreground-dark/70">
            Nous avons rassemblé les questions les plus fréquentes pour vous aider à démarrer rapidement avec TASKI.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white shadow-subtle rounded-xl overflow-hidden transition-all duration-300 hover:shadow-elevation dark:bg-card-dark dark:shadow-dark-subtle dark:hover:shadow-dark-elevation"
            >
              <Collapsible className="w-full">
                <CollapsibleTrigger className="flex justify-between items-center w-full px-6 py-4 text-left">
                  <h3 className="text-lg font-medium">{item.question}</h3>
                  <ChevronDown size={18} className="transition-transform duration-200 ui-open:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-4 text-foreground/80 dark:text-foreground-dark/80">
                  <p>{item.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
        
        {/* Additional Help Link */}
        <div className="text-center mt-10">
          <p className="text-foreground/70 dark:text-foreground-dark/70">
            Vous ne trouvez pas votre réponse ?{' '}
            <a 
              href="#contact" 
              className="text-taski-primary hover:text-taski-primary/80 transition-colors font-medium"
            >
              Contactez notre équipe
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
